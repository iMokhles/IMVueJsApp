<?php
/**
 * Created by PhpStorm.
 * User: imokhles
 * Date: 13/02/2018
 * Time: 22:37
 */

namespace App\Helpers\Api;


use Illuminate\Http\Response;

class ApiHelper
{
    public static function sendResponse($message, $error_code)
    {
        return response()->json([
            'result' => $message,
            'status' => Response::$statusTexts[$error_code],
            'status_code' => $error_code
        ])->setStatusCode($error_code, Response::$statusTexts[$error_code]);
    }
}