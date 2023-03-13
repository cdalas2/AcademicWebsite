const videos = [
    {
      title: 'Thermosensing through membrane mechanics (APS March 2023 Meeting, Las Vegas, NV)',
      src: 'https://www.youtube.com/embed/lc63mDu1rUc'
    },
    {
      title: 'Dependence of protein-induced bilayer thickness deformations on protein shape (APS March 2022 Meeting, Chicago, IL)',
      src: 'https://www.youtube.com/embed/bMl28r7R7YY'
    }
  ];
  
  const slider = document.querySelector('.slider');
  const title = document.querySelector('.title');
  
  let activeVideo = 0;
  
  function updateVideo() {
    const video = document.querySelector('.video');
    const source = document.querySelector('.video source');
  
    video.pause();
    source.setAttribute('src', videos[activeVideo].src);
    video.load();
    video.play();
  
    title.textContent = videos[activeVideo].title;
  }
  
  updateVideo();
  
  function nextVideo() {
    activeVideo++;
  
    if (activeVideo >= videos.length) {
      activeVideo = 0;
    }
  
    updateVideo();
  }
  
  setInterval(nextVideo, 5000);