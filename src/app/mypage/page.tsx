import { redirect } from 'next/navigation';

const Mypage = () => {
  redirect('/mypage/consultation-history');
  return null;
};

export default Mypage;
