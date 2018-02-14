<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Api\ApiHelper;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    private $guardName = 'api';
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:'.$this->guardName, ['except' => ['login', 'register', 'refresh']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth($this->guardName)->attempt($credentials)) {
            return ApiHelper::sendResponse(Response::$statusTexts[Response::HTTP_UNAUTHORIZED], Response::HTTP_UNAUTHORIZED);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get a JWT via registering new account.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register()
    {

        $validator = $this->registerValidator(request()->all());
        if ($validator->fails()) {
            return ApiHelper::sendResponse($validator->messages()->first(), Response::HTTP_BAD_REQUEST);
        }

        $newUser = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password')),
        ]);
        if ($newUser) {
            return ApiHelper::sendResponse("Registered Successfully", Response::HTTP_OK);

        }
        return ApiHelper::sendResponse(Response::$statusTexts[Response::HTTP_EXPECTATION_FAILED], Response::HTTP_BAD_REQUEST);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return ApiHelper::sendResponse(auth($this->guardName)->user(), Response::HTTP_OK);
    }

    /**
     * Check authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function check() {
        $user = auth($this->guardName)->user();
        if ($user) {
            return ApiHelper::sendResponse($user, Response::HTTP_OK);
        }
        return ApiHelper::sendResponse(Response::$statusTexts[Response::HTTP_UNAUTHORIZED], Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth($this->guardName)->logout();
        return ApiHelper::sendResponse("Successfully logged out", Response::HTTP_OK);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth($this->guardName)->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return ApiHelper::sendResponse([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user_info' => auth($this->guardName)->user(),
            'expires_in' => auth($this->guardName)->factory()->getTTL() * 60
        ], Response::HTTP_OK);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function registerValidator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }
}
