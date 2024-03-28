<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends Controller
{
    public function index(){
        $movies = Movie::all();
        return response()->json(['success'=>true,'message'=>'Fetch All Movie', 'data'=>$movies],200);
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'title'=> 'required|string',
            'description'=> 'required|string',
        ]);
        $movies = Movie::create($validatedData);
        return response()->json(['success'=>true,'message'=>'Create Successfull','data'=>$movies],200);
    }

    public function Update(Request $request, $id){
        $validatedData = $request->validate([
            'title'=> 'required|string',
            'description'=> 'required|string',
        ]);
    }
}
