/*
 * @Autor: lvdy
 * @Date: 2023-06-27 08:39:41
 * @LastEditors: lvdy
 * @LastEditTime: 2023-06-27 11:43:19
 * @Description: xxhhldy
 */

module.exports = {
    title: '蜜罐小包的个人博客',
    description: '包子的个人博客',
    themeConfig: {
        nav: [
            { text: '🖕🏼首页', link: '/' },
            {
                text: '蜜罐小包的个人博客',
                items: [
                    { text: 'Github', link: 'https://movie.douban.com/subject/26311909/' },
                ]
            }
        ],
        sidebar: [
            {
                title: '🖕学习总结',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "vue3对比vue2", path: "/summarize/vue2VSvue3" }
                ],
            }

        ]
    },

}