<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function csrf()
    {
        return response()->json(['token'=> csrf_token()]);
    }
}
