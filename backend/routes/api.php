<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/movies', [MovieController::class, 'index']);
Route::post('/create-movie', [MovieController::class, 'store']);
Route::put('/update-movie/{id}', [MovieController::class, 'update']);
Route::delete('/delete-movie/{id}', [MovieController::class, 'destroy']);
