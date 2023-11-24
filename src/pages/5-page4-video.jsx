
import ReactPlayer from 'react-player';



  function Page4Video() {  
return (
  <section className='video-container'>
      <ReactPlayer className='video'
        url="https://www.youtube.com/watch?v=xVE37tNyvGA&t=11s"
        controls={true} // لعرض أزرار التحكم في الفيديو
        // width="90%" // عرض الفيديو
        // height="90%" // ارتفاع الفيديو
        
      />
        <ReactPlayer className='video'
        url="https://www.youtube.com/watch?v=OHVY80n1AJE"
        controls={true} // لعرض أزرار التحكم في الفيديو
        // width="90%" // عرض الفيديو
        // height="90%" // ارتفاع الفيديو
        
      />
    </section>

  );
}

export default Page4Video;