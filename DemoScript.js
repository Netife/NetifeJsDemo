module.exports = {
	"emgEdit":(callback, request) => { //参数需要保持一致//request是序列化之后的对象
	//在这里利用request做一些事情，然后传出response，reponse里面可以重定向端口，Ip和Raw Text
	
	var response = {
            "UUID":"uuid", //需要和request的UUID保持一致
            "DstIpAddr":"22", //重定向Ip
            "DstIpPort":"80", //重定向端口
            "ResponseText":"editedAny" //修改Raw Text
        }
	
	//在这里必须返回一个callback
	callback(null, response); //前面是错误的执行结果，后面是修改后给出的response
	}
}
