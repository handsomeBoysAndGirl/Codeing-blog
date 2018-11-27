<?php
namespace app\index\controller;

use app\index\model\GuanliModel;
use think\App;
use think\Controller;
use think\Request;

class IndexController extends Controller
{
    protected $request = null;
    public function __construct()
    {
        parent::__construct();
        $this->request = new Request();
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Methods:POST, GET, OPTIONS');
    }

    //登录
    public function login() {
        $username = $this->request->post('username');
        $pwd = $this->request->post('userpwd');
        $guanli = new GuanliModel();
        $res = $guanli->where('name', $username)->field('id,password')->find();
        if ($res != null) {
            if ($res['password'] === $pwd) {
                return 1;
            }else {
                return 0;
            }
        }else {
            return 0;
        }
    }

}
