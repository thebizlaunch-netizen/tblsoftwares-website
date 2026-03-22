import { redirect } from 'next/navigation';

// Products page now redirects to Apps — "Products" as a concept
// spans all 4 sections (Apps, Agents, Softwares, Platforms).
// The old /products URL redirects to /apps for backwards compatibility.

export default function ProductsRedirect() {
  redirect('/apps');
}
