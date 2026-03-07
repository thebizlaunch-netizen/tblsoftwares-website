const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://46.202.141.45:4500';

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  companies_house: string;
  domain: string;
  social: string;
  services: Service[];
  team: TeamMember[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
  assets: { type: string; url: string }[];
  content: { type: string; title: string; body: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  type: string;
  created_at: string;
  product: string | null;
}

export async function fetchCompany(): Promise<CompanyInfo> {
  try {
    const res = await fetch(`${API_URL}/api/v1/public/company`, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  } catch {
    return {
      name: "The BizLaunch Ltd",
      tagline: "AI-Powered Enterprise Software",
      description: "We build intelligent software systems that transform how businesses operate.",
      companies_house: "16874431",
      domain: "tblsoftwares.com",
      social: "@bizlaunchhq",
      services: [],
      team: []
    };
  }
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/api/v1/public/products`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.products || [];
  } catch {
    return [];
  }
}

export async function fetchBlog(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_URL}/api/v1/public/blog`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.posts || [];
  } catch {
    return [];
  }
}

export async function submitContact(data: { name: string; email: string; message: string }): Promise<{ success: boolean; message?: string; error?: string }> {
  const res = await fetch(`${API_URL}/api/v1/public/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
