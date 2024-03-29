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
        return response()->json(['success'=>true,'message'=>'Create Successfully','data'=>$movies],200);
    }

    public function update(Request $request, $id){
        $request->validate([
            'title'=> 'required|string',
            'description'=> 'required|string',
        ]);
        $movie = Movie::find($id);
        if($movie){
            $movie -> title = $request -> input('title');
            $movie -> description = $request -> input('description');
            $movie -> update();
        }
        return response()->json(['success'=>true,'message'=>'Update Successfully','data'=>$movie],200);
    }

    public function destroy(Request $request, $id){
        $request->validate([
            'title'=> 'required|string',
            'description'=> 'required|string',
        ]);
        $movie = Movie::find($id);
        if($movie){
            $movie -> delete();
        }
        return response()->json(['success'=>true,'message'=>'Deleted Successfully','data'=>$movie],200);
    }
}
