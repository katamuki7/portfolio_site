import axios from "axios";

class Get {
    public async execute()  {
        // 記事一覧を取得する
        const response = await axios.get(
            "https://fukufuku.microcms.io/api/v1/blogs/",
            {
                headers: {"X-MICROCMS-API-KEY": import.meta.env.VITE_HEADLESS_CMS_API_KEY}
            }
        );
        return response.data.contents.map((blog: any) => {
            return {
                articleId: blog.id,
                title: blog.title,
                imgUrl: blog.eyecatch.url,
                content: blog.content,
                publishedAt: blog.publishedAt,
            };
        });
    }
}
export default new Get();