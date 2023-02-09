import React from "react";

const VideoList = () => {
  const data = [
    {
      name: "5 حاجات لازم تعملهم كي تمشي للمدينة ياسمين الحمامات😉و هاو كفاش تعدّي اقوى ويكاند فالمدينة 👌🏼❤️",
      url: "https://www.youtube.com/embed/T9_ktLsqgic",
    },
    {
      name: "هاو كيفاش تعدي أقوى أيّامات حياتك في توزر البيّة😉❤جولة إكتشاف توزر و تجربة أكل الجنوب🇹🇳",
      url: "https://www.youtube.com/embed/fvtsrNYM2PY",
    },
    {
      name: "مسلسل شوفلي حل - الموسم 2009 - الحلقة الرابعة",
      url: "https://www.youtube.com/embed/I3CssOagtgc",
    },
  ];
  return (
    <div>
      {data.map((video) => (
        <span style={{display:"flex"}}>
        <iframe
          width="300"
          height="150"
          src={video.url}
          title="2015 summer vibes ~nostalgia playlist"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          ></iframe>
        <h6>{video.name}</h6>
        
          </span>
      ))}
    </div>
  );
};

export default VideoList;
