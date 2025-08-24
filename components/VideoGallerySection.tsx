
import React from 'react';
import { VIDEOS } from '../constants';
import { Video } from '../types';

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
        <div className="aspect-w-16 aspect-h-9">
             <iframe 
                className="w-full h-full"
                src={video.embedUrl} 
                title={video.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{video.title}</h3>
        </div>
    </div>
);

const VideoGallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Galeri Video</h2>
          <p className="mt-4 text-lg text-gray-400">Tonton lebih dekat produk-produk andalan Suzuki.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
