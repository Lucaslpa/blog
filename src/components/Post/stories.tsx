import { Post as PostD } from ".";


const stories ={
    title: 'Post',
    component: PostD,
    args: {
        type: 'Featured',
        postData: {
            title: 'Xbox video game',
            imgLink: 'https://compass-ssl.xbox.com/assets/b8/bb/b8bbffcd-3e6c-4609-a361-ef8c1ab13349.jpg?n=X1S-2019_Superhero-1400_Star-Wars_1920x1080.jpg',
            alt: 'Xbox Imagem', 
            postInfos: {
                date: '14/08/2021', 
                author: 'Lucas',
                category: 'Video Games'
            }
          }
    }

}
export default stories 

export const Post = (args: any) => <PostD {...args}/>

