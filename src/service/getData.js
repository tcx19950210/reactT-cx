import fetch from './fetch'
/**
 * fetch(url,data = {})
 * 无论get还是post，传对象
 */

/*淘宝客私域用户备案*/
/*------------------------------------------------------------------------*/
//1.淘宝客私域用户备案邀请码
export const get_publisher = (wechatId) => fetch('/publisher',{
	wechatId:wechatId,	
});
//淘宝客私域用户备案信息查询
export const get_publisher_get = (wechatId) => fetch('/publisher/get',{
	wechatId:wechatId,	
});


// export const download_file= (filePath,fileName) => fetch('/publisher', {
// 	filePath: filePath,
// 	fileName:fileName
// },'post','ajax');

// import { get_publisher } from "../../service/getData"

	// //获取监控点列表
    // view_img_list(15,pageIndex).then(data=>{
    //     this.monitorList=data.data;
    //     this.total=data.total
    // })
