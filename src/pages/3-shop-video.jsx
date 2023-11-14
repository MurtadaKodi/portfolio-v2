
import ReactPlayer from 'react-player';



  function VideoPlayer() {  
return (
    <section className='video-container'>
      <ReactPlayer className='video'
        url="https://youtu.be/9jouP_EUyok?si=VsmNfmYo2wmhP0Ez"
        controls={true} // لعرض أزرار التحكم في الفيديو
        // width="90%" // عرض الفيديو
        // height="90%" // ارتفاع الفيديو
        
      />
        <ReactPlayer className='video'
        url="https://youtu.be/9jouP_EUyok?si=VsmNfmYo2wmhP0Ez"
        controls={true} // لعرض أزرار التحكم في الفيديو
        // width="90%" // عرض الفيديو
        // height="90%" // ارتفاع الفيديو
        
      />
    </section>
  );
}

export default VideoPlayer;