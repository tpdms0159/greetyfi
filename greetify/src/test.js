
import { useEffect, useState } from "react";

// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;

export default (props) =>{
	// 배포한 자신의 사이트
    const realUrl = "https://localhost:3000"
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
                title: '신년우체부',
                description: '나만의 인사카드를 만들어봐요',
                imageUrl:
                "",
                link: {
                    mobileWebUrl: realUrl,
                },
            },
            buttons: [
                {
                    title: '나도 테스트 하러가기',
                    link: {
                    mobileWebUrl: realUrl,
                    },
                },
                ],
            });

        




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
            <button 
                className='grey-btn'
                onClick={() => {
                    shareKakao()
                }}
            > 카카오톡 공유하기 </button>
        </>
    )
}
