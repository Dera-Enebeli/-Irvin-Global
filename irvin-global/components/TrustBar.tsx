export default function TrustBar() {
  return (
    <section className="bg-navy-800 py-8 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/50 text-sm mb-6 uppercase tracking-wider">
          Licensed & Regulated By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CAC</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Corporate Affairs</p>
              <p className="text-white/60 text-xs">Commission</p>
            </div>
          </div>

          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">CBN</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Central Bank</p>
              <p className="text-white/60 text-xs">of Nigeria</p>
            </div>
          </div>

          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">NDIC</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">NDIC</p>
              <p className="text-white/60 text-xs">Insured</p>
            </div>
          </div>

          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">SEC</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Securities &</p>
              <p className="text-white/60 text-xs">Exchange Commission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
