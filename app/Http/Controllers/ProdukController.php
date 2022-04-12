<?php

namespace App\Http\Controllers;
use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use File;

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
        ->orderBy('produk.id', 'asc')
        ->get()
        ;
        // dd($produk);
        return response()->json($produk);
        }
        else{
        $produk = Produk::join('kategori', 'kategori.id', '=', 'produk.kategori_id')
        ->orderBy('produk.id', 'asc')
        ->get(['produk.*','kategori.jenis_kategori']);
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
        $validatedData = $request->validate([
            'nama_produk' => 'required|min:1|max:64',
            'harga' => 'required|min:1|max:64',
            'status' => 'required|min:1|max:64',
            'kategori' => 'required|min:1|max:64',
            'berat' => 'required|min:1|max:64',
            'deskripsi' => 'required|min:1|max:64',
        ]);
        if($request->foto_produk){
            $photo = $request->foto_produk;
            $str = Str::random(8);
            $getExt = $photo->getClientOriginalExtension();
            $namafile = $str.'.'.$getExt;
            $photo->move('foto_produk', $namafile);
        }

        $kategori_id = Kategori::where('jenis_kategori', $request->kategori)->pluck('id')->first();
        Produk::create(array_merge($request->except(['foto_produk']) ,['kategori_id' => $kategori_id, 'foto_produk' => $namafile]));
       
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
        $validatedData = $request->validate([
            'nama_produk' => 'required|min:1|max:64',
            'harga' => 'required|min:1|max:64',
            'status' => 'required|min:1|max:64',
            'kategori' => 'required|min:1|max:64',
            'berat' => 'required|min:1|max:64',
            'deskripsi' => 'required|min:1|max:64',
        ]);
        $update = Produk::find($id);
        if($request->hasFile('foto_produk')){
            $path = 'foto_produk/'.$update->foto_produk;
            if(File::exists($path)){
                File::delete($path);
            }
            $photo = $request->foto_produk;
            $str = Str::random(8);
            $getExt = $photo->getClientOriginalExtension();
            $namafile = $str.'.'.$getExt;
            $photo->move('foto_produk', $namafile);
        } else {
            $namafile = $update->foto_produk;
        }
        $id= $request->id_produk;
        $produk = Produk::find($id);
        $produk->update(array_merge($request->except(['foto_produk']) ,['foto_produk' => $namafile]));
        return response()->json($produk);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $destroy = Produk::find($id);

        if(!$destroy){
            return response()->json($destroy);
        }

        if($destroy->foto_produk){
            $path = 'foto_produk/'.$destroy->foto_produk;
            if(File::exists($path)){
                File::delete($path);
            }
        }

        $destroy->delete();
        return response()->json($destroy);
    }
}
