import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/احمد-فكري',
        destination: '/ahmed-fekry',
        permanent: true,
      },
      {
        source: '/blog/قصة-نجاح-المهندس-احمد-فكري',
        destination: '/blog/ahmed-fekry-success-story',
        permanent: true,
      },
      {
        source: '/blog/المهندس-احمد-فكري-رائد-الصناعة',
        destination: '/blog/ahmed-fekry-industry-pioneer',
        permanent: true,
      },
      {
        source: '/blog/افضل-ماكينات-الرخام-والجرانيت',
        destination: '/blog/best-marble-machines-egypt',
        permanent: true,
      },
      {
        source: '/blog/اسعار-ماكينات-الرخام-في-مصر',
        destination: '/blog/marble-machines-prices-egypt',
        permanent: true,
      },
      {
        source: '/blog/اوناش-علوية-لمصانع-الرخام',
        destination: '/blog/marble-factories-overhead-cranes',
        permanent: true,
      },
      {
        source: '/blog/دليل-صيانة-ماكينات-الرخام',
        destination: '/blog/marble-machines-maintenance-guide',
        permanent: true,
      },
      {
        source: '/blog/منشار-حمام-الزيت-في-شق-الثعبان',
        destination: '/blog/shaq-el-thoban-oil-bath-saw',
        permanent: true,
      },
      {
        source: '/blog/احمد-فكري-السيرة-الذاتية',
        destination: '/blog/ahmed-fekry-biography',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
