<?php

namespace App\Http\Controllers\Admin\Api;

use App\Helpers\Api\ApiHelper;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{

    private $guardName = 'admin_api';
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin_api', ['except' => ['login']]);
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
            return ApiHelper::sendResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return ApiHelper::sendResponse(auth($this->guardName)->user(), Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth($this->guardName)->logout();
        return ApiHelper::sendResponse(['message' => 'Successfully logged out'], Response::HTTP_UNAUTHORIZED);
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
            'expires_in' => auth($this->guardName)->factory()->getTTL() * 60
        ], Response::HTTP_UNAUTHORIZED);
    }
}
