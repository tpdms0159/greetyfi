
import { useEffect, useState } from "react";

// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;

export default (props) =>{
	// 배포한 자신의 사이트
    const realUrl = "https://greetyfi-tpdms0159s-projects.vercel.app/"
    // 로컬 주소 (localhost 3000 같은거)
    // const resultUrl = window.location.href;
    const [href, setHref] = useState("");
    
    console.log("props:",props);
    // 재랜더링시에 실행되게 해준다.
    useEffect(()=>{
    	// init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('dfef866b8e3f9495330216a668763521');
        // 잘 적용되면 true 를 뱉는다.
        console.log(Kakao.isInitialized());
        console.log("useState: ", `${props.link}`)
        
        console.log('useEffect href:', href);
        
    },[href]);

    const shareKakao = (h) =>{
        setHref(`${props.link}`)
        console.log('sharkakao:', props)
        console.log('href:', href);

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '마음 우체국',
                description: '나만의 마음카드를 만들어봐요',
                imageUrl:
                "https://github.com/tpdms0159/greetyfi/blob/main/greetify/public/assets/kakaoBanner.png?raw=true",
                link: {
                    mobileWebUrl: realUrl,
                },
            },
            buttons: [
                {
                    title: '나도 카드 만들러가기',
                    link: {
                    mobileWebUrl: realUrl,
                    },
                },
                ],
            });

        // Kakao.Share.sendDefault({
        //     objectType: 'text',
        //     text:
        //       '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오톡 공유는 다른 템플릿을 이용해 보낼 수 있습니다.',
        //     link: {
        //       mobileWebUrl: 'https://developers.kakao.com',
        //       webUrl: 'https://developers.kakao.com',
        //     },
        //   });




    }
// const shareKakao = () => {

//     Kakao.API.request({
//         url: '/v1/api/talk/friends/message/default/send',
//         data: {
//           receiver_uuids: ['${RECEIVER_UUID}'],
//           template_object: {
//             object_type: 'feed',
//             content: {
//               title: '딸기 치즈 케익',
//               description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
//               image_url:
//                 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//               link: {
//                 web_url: 'https://developers.kakao.com',
//                 mobile_web_url: 'https://developers.kakao.com',
//               },
//             },
//             item_content: {
//               profile_text: 'Kakao',
//               profile_image_url: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//               title_image_url: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//               title_image_text: 'Cheese cake',
//               title_image_category: 'Cake',
//               items: [
//                 {
//                   item: 'Cake1',
//                   item_op: '1000원',
//                 },
//                 {
//                   item: 'Cake2',
//                   item_op: '2000원',
//                 },
//                 {
//                   item: 'Cake3',
//                   item_op: '3000원',
//                 },
//                 {
//                   item: 'Cake4',
//                   item_op: '4000원',
//                 },
//                 {
//                   item: 'Cake5',
//                   item_op: '5000원',
//                 },
//               ],
//               sum: 'Total',
//               sum_op: '15000원',
//             },
//             social: {
//               like_count: 100,
//               comment_count: 200,
//             },
//             buttons: [
//               {
//                 title: '웹으로 보기',
//                 link: {
//                   mobile_web_url: 'https://developers.kakao.com',
//                   web_url: 'https://developers.kakao.com',
//                 },
//               },
//               {
//                 title: '앱으로 보기',
//                 link: {
//                   mobile_web_url: 'https://developers.kakao.com',
//                   web_url: 'https://developers.kakao.com',
//                 },
//               },
//             ],
//           },
//         },
//       })
//         .then(function(response) {
//           console.log(response);
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     }
      
    return(
        <>
            <div 
               
                onClick={() => {
                    shareKakao()
                }}
            > 서비스 공유하기 </div>
        </>
    )
}
