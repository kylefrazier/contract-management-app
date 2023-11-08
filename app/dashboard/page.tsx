import { cookies } from 'next/headers';
import { logout } from '../actions';

export default function Page() {
  const cookie = cookies().get('pb_auth');

  // This never happens because of the middleware,
  // but we must make typescript happy
  if (!cookie) throw new Error('Not logged in');

  return (
    <div>
      <h1 className="title">Contract Managment App</h1>
      <h2 className="subtitle">Streamline Your Operations with Contract Management Software</h2>
      <p>
        In today's fast-paced business landscape, efficient contract management is the key to success. Say goodbye to manual paperwork, missed deadlines, and costly errors. Welcome to the future of contract management with our cutting-edge Contract Management Software.
      </p>
      <p>
        Our Contract Management Software is a powerful and user-friendly solution designed to simplify the entire contract lifecycle, from creation and negotiation to execution and renewal. It's the ultimate tool for organizations of all sizes and industries, offering unparalleled control, visibility, and compliance.
      </p>
    </div >
  );
}
