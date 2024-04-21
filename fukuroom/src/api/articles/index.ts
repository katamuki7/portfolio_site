import axios from "axios";

class Get {
    public async execute(articleId: string) {
        // 特定の記事1つを取得する
        const response = await axios.get(
            "https://fukufuku.microcms.io/api/v1/blogs/" + articleId,
            {
                headers: {"X-MICROCMS-API-KEY": import.meta.env.VITE_HEADLESS_CMS_API_KEY}
            }
        );
        const res =  response.data;
        return {
            articleId: res.id,
            title: res.title,
            imgUrl: res.eyecatch.url,
            content: res.content,
            publishedAt: res.publishedAt,
        }
    }
}
export default new Get();