<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/bands', 'HomeController@index');
Route::get('/band/create', 'HomeController@index');
Route::post('/band', 'BandController@post');
Route::get('/bands/all', 'BandController@all');
Route::get('/albums', 'HomeController@index');
Route::get('/albums/all', 'AlbumController@allWithBands');
Route::get('/csrf', 'HomeController@csrf');
