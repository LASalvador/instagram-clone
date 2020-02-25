import React, { Component } from 'react';

// CSS Imports
import '../assets/css/feed.css';

// Imagens Impors
import more from '../assets/images/more.svg';
import like from '../assets/images/like.svg';
import comment from '../assets/images/comment.svg';
import send from '../assets/images/send.svg';

import IMG_20190224_193159678 from '../assets/images/feed/IMG_20190224_193159678.jpg';
import IMG_20190519_115105 from '../assets/images/feed/IMG_20190519_115105.jpg';
import IMG_20191013_WA0018 from '../assets/images/feed/IMG_20191013_WA0018.jpg';

import IMG_20190302_WA0004 from '../assets/images/feed/IMG_20190302_WA0004.jpg';
import IMG_20190602_140111 from '../assets/images/feed/IMG_20190602_140111.jpg';
import IMG_20191109_WA0044 from '../assets/images/feed/IMG_20191109_WA0044.jpg';
import IMG_20190414_165114 from '../assets/images/feed/IMG_20190414_165114.jpg';
import IMG_20190616_005802 from '../assets/images/feed/IMG_20190616_005802.jpg';
import IMG_20191207_233119 from '../assets/images/feed/IMG_20191207_233119.jpg';

import IMG_20190414_165954 from '../assets/images/feed/IMG_20190414_165954.jpg';
import IMG_20190616_011255 from '../assets/images/feed/IMG_20190616_011255.jpg';
import IMG_20191214_142347 from '../assets/images/feed/IMG_20191214_142347.jpg';

import IMG_20190414_170222 from '../assets/images/feed/IMG_20190414_170222.jpg';
import IMG_20190817_WA0037 from '../assets/images/feed/IMG_20190817_WA0037.jpg';
import IMG_20191224_213818 from '../assets/images/feed/IMG_20191224_213818.jpg';

import IMG_20190414_171208 from '../assets/images/feed/IMG_20190414_171208.jpg';
import IMG_20190922_205358 from '../assets/images/feed/IMG_20190922_205358.jpg';
import IMG_20200103_WA0004 from '../assets/images/feed/IMG_20200103_WA0004.jpg';

import IMG_20190421_141757 from '../assets/images/feed/IMG_20190421_141757.jpg';
import IMG_20190929_001500 from '../assets/images/feed/IMG_20190929_001500.jpg';
import IMG_20200104_112635 from '../assets/images/feed/IMG_20200104_112635.jpg';

import IMG_20190501_215216 from '../assets/images/feed/IMG_20190501_215216.jpg';
import IMG_20191006_WA0030 from '../assets/images/feed/IMG_20191006_WA0030.jpg';
import IMG_20200119_WA0000 from '../assets/images/feed/IMG_20200119_WA0000.jpg';
import IMG_20190512_WA0009 from '../assets/images/feed/IMG_20190512_WA0009.jpg';
import IMG_20191006_WA0031 from '../assets/images/feed/IMG_20191006_WA0031.jpg';
import IMG_20200209_202528 from '../assets/images/feed/IMG_20200209_202528.jpg';



export default class pages extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {
                  "likes": 0,
                  "_id": "5e53ec6cdc4f120942a212a9",
                  "author": "eu",
                  "place": "jacarei",
                  "description": "a gente na casa do gui",
                  "hashtags": "",
                  "image": IMG_20200119_WA0000,
                  "createdAt": "2020-02-24T15:31:56.113Z",
                  "updatedAt": "2020-02-24T15:31:56.113Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53ec4edc4f120942a212a8",
                  "author": "voce",
                  "place": "jambeiro",
                  "description": " nosso primeiro \"banho\" kkkk",
                  "hashtags": "",
                  "image": IMG_20200103_WA0004,
                  "createdAt": "2020-02-24T15:31:26.559Z",
                  "updatedAt": "2020-02-24T15:31:26.559Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53ec27dc4f120942a212a7",
                  "author": "voce",
                  "place": "arca",
                  "description": "o lugar onde tudo começou",
                  "hashtags": "",
                  "image": IMG_20191109_WA0044,
                  "createdAt": "2020-02-24T15:30:47.630Z",
                  "updatedAt": "2020-02-24T15:30:47.630Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53ebfedc4f120942a212a6",
                  "author": "eu ",
                  "place": "piscina João",
                  "description": "a gente antes de fugir para minha casa .....",
                  "hashtags": "",
                  "image": IMG_20191013_WA0018,
                  "createdAt": "2020-02-24T15:30:06.459Z",
                  "updatedAt": "2020-02-24T15:30:06.459Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53ebd5dc4f120942a212a5",
                  "author": "você ",
                  "place": "sua casa",
                  "description": "voce toda linda com esse macacão e eu fazendo joia",
                  "hashtags": "",
                  "image": IMG_20191006_WA0031,
                  "createdAt": "2020-02-24T15:29:25.146Z",
                  "updatedAt": "2020-02-24T15:29:25.146Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53eba6dc4f120942a212a4",
                  "author": "voce",
                  "place": "sua casa",
                  "description": "mais uma foto comigo empinando a bunda kk",
                  "hashtags": "",
                  "image": IMG_20191006_WA0030,
                  "createdAt": "2020-02-24T15:28:38.110Z",
                  "updatedAt": "2020-02-24T15:28:38.110Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53eb87dc4f120942a212a3",
                  "author": "voce",
                  "place": "sei la",
                  "description": "eu dormindo como sempre kkk",
                  "hashtags": "",
                  "image": IMG_20190817_WA0037,
                  "createdAt": "2020-02-24T15:28:07.483Z",
                  "updatedAt": "2020-02-24T15:28:07.483Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53eb6adc4f120942a212a2",
                  "author": "sogrão",
                  "place": "monteiro lobato",
                  "description": "role de aniversário da sua mãe",
                  "hashtags": "",
                  "image": IMG_20190512_WA0009,
                  "createdAt": "2020-02-24T15:27:38.862Z",
                  "updatedAt": "2020-02-24T15:27:38.862Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53eb3fdc4f120942a212a1",
                  "author": "voce",
                  "place": "sua casa",
                  "description": "baguncinha de leve",
                  "hashtags": "",
                  "image": IMG_20200209_202528,
                  "createdAt": "2020-02-24T15:26:55.073Z",
                  "updatedAt": "2020-02-24T15:26:55.073Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53eb1bdc4f120942a212a0",
                  "author": "voce",
                  "place": "casa do seu padrinho",
                  "description": "primeira foto de casal",
                  "hashtags": "",
                  "image": IMG_20190302_WA0004,
                  "createdAt": "2020-02-24T15:26:19.961Z",
                  "updatedAt": "2020-02-24T15:26:19.961Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53eaecdc4f120942a2129f",
                  "author": "eu ",
                  "place": "padaria",
                  "description": "alimentando minha morena novamente, (tu come em)",
                  "hashtags": "",
                  "image": IMG_20200104_112635,
                  "createdAt": "2020-02-24T15:25:32.467Z",
                  "updatedAt": "2020-02-24T15:25:32.467Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53eabcdc4f120942a2129e",
                  "author": "eu",
                  "place": "sua casa",
                  "description": " primeiro natal como namorados kk",
                  "hashtags": "",
                  "image": IMG_20191224_213818,
                  "createdAt": "2020-02-24T15:24:44.477Z",
                  "updatedAt": "2020-02-24T15:24:44.477Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53ea99dc4f120942a2129d",
                  "author": "eu",
                  "place": "festa madrinha ju",
                  "description": "a gente perdido na casa gigante kkk",
                  "hashtags": "",
                  "image": IMG_20191214_142347,
                  "createdAt": "2020-02-24T15:24:09.036Z",
                  "updatedAt": "2020-02-24T15:24:09.036Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53ea6ddc4f120942a2129c",
                  "author": "julia ",
                  "place": "casamento da tainara",
                  "description": "você muuuuuito gata e gostosa e eu",
                  "hashtags": "",
                  "image": IMG_20191207_233119,
                  "createdAt": "2020-02-24T15:23:25.038Z",
                  "updatedAt": "2020-02-24T15:23:25.038Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53ea3fdc4f120942a2129b",
                  "author": "eu ",
                  "place": "sua casa",
                  "description": "mais um sábado na sua casa",
                  "hashtags": "",
                  "image": IMG_20190929_001500,
                  "createdAt": "2020-02-24T15:22:39.341Z",
                  "updatedAt": "2020-02-24T15:22:39.341Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53ea19dc4f120942a2129a",
                  "author": "eu ",
                  "place": "habib's ",
                  "description": "eu alimentando minha morena ",
                  "hashtags": "",
                  "image":IMG_20190922_205358,
                  "createdAt": "2020-02-24T15:22:01.002Z",
                  "updatedAt": "2020-02-24T15:22:01.002Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e9fcdc4f120942a21299",
                  "author": "voce",
                  "place": "sua casa",
                  "description": "sei lá gosto dessa foto kkk",
                  "hashtags": "",
                  "image": IMG_20190616_011255,
                  "createdAt": "2020-02-24T15:21:32.473Z",
                  "updatedAt": "2020-02-24T15:21:32.473Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e9d6dc4f120942a21298",
                  "author": "você",
                  "place": "sua casa",
                  "description": "eu sendo seu segurança enquanto escova os dentes",
                  "hashtags": "",
                  "image": IMG_20190616_005802,
                  "createdAt": "2020-02-24T15:20:54.357Z",
                  "updatedAt": "2020-02-24T15:20:54.357Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e99adc4f120942a21297",
                  "author": "nós",
                  "place": "",
                  "description": "",
                  "hashtags": "",
                  "image": IMG_20190602_140111,
                  "createdAt": "2020-02-24T15:19:54.992Z",
                  "updatedAt": "2020-02-24T15:19:54.992Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e982dc4f120942a21296",
                  "author": "bia",
                  "place": "sua casa",
                  "description": "eu tentando ser romantico e fazendo tudo errado",
                  "hashtags": "",
                  "image": IMG_20190519_115105,
                  "createdAt": "2020-02-24T15:19:30.524Z",
                  "updatedAt": "2020-02-24T15:19:30.524Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e959dc4f120942a21295",
                  "author": "nós",
                  "place": "localiza ai",
                  "description": "em algum lugar fazendo algo",
                  "hashtags": "",
                  "image": IMG_20190501_215216,
                  "createdAt": "2020-02-24T15:18:49.469Z",
                  "updatedAt": "2020-02-24T15:18:49.469Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e923dc4f120942a21294",
                  "author": "eu",
                  "place": "sua casa",
                  "description": "um sábado qualquer na sua casa",
                  "hashtags": "",
                  "image": IMG_20190421_141757,
                  "createdAt": "2020-02-24T15:17:55.197Z",
                  "updatedAt": "2020-02-24T15:17:55.197Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e909dc4f120942a21293",
                  "author": "nós e a bia",
                  "place": "vale sul",
                  "description": "nós e a bia tomando banho kkk",
                  "hashtags": "",
                  "image": IMG_20190414_171208,
                  "createdAt": "2020-02-24T15:17:29.033Z",
                  "updatedAt": "2020-02-24T15:17:29.033Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e8eedc4f120942a21292",
                  "author": "nós novamente",
                  "place": "vale sul",
                  "description": "nós e a roupa da penelope",
                  "hashtags": "",
                  "image": IMG_20190414_170222,
                  "createdAt": "2020-02-24T15:17:02.006Z",
                  "updatedAt": "2020-02-24T15:17:02.006Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e8d0dc4f120942a21291",
                  "author": "nós ",
                  "place": "vale sul",
                  "description": "nós no castelo ra tim bun",
                  "hashtags": "",
                  "image": IMG_20190414_165954,
                  "createdAt": "2020-02-24T15:16:32.200Z",
                  "updatedAt": "2020-02-24T15:16:32.200Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e8b0dc4f120942a21290",
                  "author": "nós e a bia",
                  "place": "vale sul",
                  "description": "nós e a bia na exposição do castelo ra tim bum",
                  "hashtags": "",
                  "image": IMG_20190414_165114,
                  "createdAt": "2020-02-24T15:16:00.593Z",
                  "updatedAt": "2020-02-24T15:16:00.593Z",
                  "__v": 0
                },
                {
                  "likes": 0,
                  "_id": "5e53e883dc4f120942a2128f",
                  "author": "nós",
                  "place": "em algum lugar",
                  "description": "nós em algum lugar",
                  "hashtags": "",
                  "image": IMG_20190224_193159678,
                  "createdAt": "2020-02-24T15:15:15.530Z",
                  "updatedAt": "2020-02-24T15:15:15.530Z",
                  "__v": 0
                }
            ]
        }
    }

    render() {
        return (
            <section id="post-list">
                {this.state.feed.map(post =>(
                    
                        <article key={ post._id }>
                            <header>
                                <div className="user-info">
                                    <span> { post.author } </span>
                                    <span className="place"> { post.place } </span>
                                </div>
                                
                                <img src={ more } alt="Mais" />
                            </header>
                            
                            <img src={post.image} alt=""/>

                            <footer>
                                <div className="actions">
                                    <button type="button">
                                        <img src={like} alt=""/>
                                    </button>
                                    <img src={comment} alt=""/>
                                    <img src={send} alt=""/>
                                </div>

                                <strong> { post.likes } curtidas</strong>

                                <p> 
                                    { post.description }
                                    <span> { post.hashtags } </span>
                                </p>
                            </footer>
                        </article>

                ))}
            </section>
        );
    }
}
