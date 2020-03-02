import axios from 'axios'

export async function getTags(sort) {
    let { data } = await axios.get('/js/tags.json')
    // console.log(data[sort])
    return data[sort]
}
//获取图书列表
export async function getList(obj) {
   
    let { data } = await axios.get(`https://douban.uieee.com/v2/book/search?tag=${obj.title}&count=${obj.num}`)
    console.log(data)
    return data.books
}

 
