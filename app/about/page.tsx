export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-sm text-orange-400 font-medium uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-8">Building the Future of Business Software</h1>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>TBL Softwares is the software products division of <strong className="text-white">The BizLaunch Ltd</strong>, a UK-registered company (Companies House No. 16874431) dedicated to building AI-powered tools that help businesses operate smarter.</p>
            <p>Our products are built by an autonomous AI system called Abdul — an enterprise-grade AI COO that can scan markets, identify pain points, design solutions, build software, deploy it, validate quality, and deliver commercially credible products.</p>
            <p>Every product we release passes through a rigorous quality pipeline: runtime stability testing, visual regression testing, product truth verification, and AI-powered credibility review. We do not ship products that are not ready.</p>
            <div className="card-glow rounded-2xl p-8 mt-12">
              <h2 className="text-xl font-bold text-white mb-4">Company Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><p className="text-gray-500">Company Name</p><p className="text-white">The BizLaunch Ltd</p></div>
                <div><p className="text-gray-500">Company Number</p><p className="text-white">16874431</p></div>
                <div><p className="text-gray-500">Trading As</p><p className="text-white">TBL Softwares</p></div>
                <div><p className="text-gray-500">Incorporated</p><p className="text-white">25 November 2025</p></div>
                <div><p className="text-gray-500">Registered Address</p><p className="text-white">Office 7001, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ</p></div>
                <div><p className="text-gray-500">Phone</p><p className="text-white">020 3432 1869</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
