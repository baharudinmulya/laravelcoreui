<?php

namespace App\Http\Controllers;
use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Http\Request;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        if($request->q)
        {
        $produk = Produk::join('kategori', 'produk.kategori_id','=', 'kategori.id')
        ->where('nama_produk', 'LIKE', '%'.$request->q.'%')
        ->orWhere('harga', 'LIKE', '%'.$request->q.'%')
        ->orWhere('status', 'LIKE', '%'.$request->q.'%')
        ->orWhere('kategori_id', 'LIKE', '%'.$request->q.'%')
        ->orWhere('berat', 'LIKE', '%'.$request->q.'%')
        ->orWhere('deskripsi', 'LIKE', '%'.$request->q.'%')
        ->get()
        ;
        // dd($produk);
        return response()->json($produk);
        }
        else{
        $produk = Produk::join('kategori', 'kategori.id', '=', 'produk.kategori_id')
        ->get(['produk.*','kategori.nama_kategori']);
        return response()->json($produk);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Kategori::create($request->all());
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $kategori = Produk::find($id);
        return response()->json($kategori);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $kategori = Kategori::find($id);
        $kategori->update($request->all());
        return response()->json($kategori);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $kategori = Kategori::find($id);
        $kategori->delete();
        return response()->json($kategori);
    }
}
