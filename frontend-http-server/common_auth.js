
var flag_server_local = true;

// MacPro Docker
let g_user_auth_token_docker = '307e60bcf5f1930b39a6ce5bc87b171ed0451323';
// MacPro Local
// let g_user_auth_token_local = '219201bc10fb6baa4a4cbc36d318aedaa89f78b7';
// MacAir Local
let g_user_auth_token_local = '0676010d893a1e1cd15f5d8a3883b5ced174fdad';

var g_user_auth_token = g_user_auth_token_docker;
if (flag_server_local) {
    g_user_auth_token = g_user_auth_token_local;
}
