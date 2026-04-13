'use client'

import { useState, useEffect } from 'react'

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    amount: '',
    message: '',
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setTimeout(() => {
        setStep(1)
        setIsSuccess(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          amount: '',
          message: '',
        })
      }, 300)
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 midnight/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <>
            <div className="p-6 lg:p-8 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-electric/10 rounded-lg flex items-center justify-center">
                  <span className="text-electric font-bold">IG</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-ice text-lg">Inquire Now</h3>
                  <p className="text-gray-500 text-sm">Get started in 3 simple steps</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex-1">
                    <div className={`h-1.5 rounded-full transition-colors ${
                      step >= s ? 'bg-electric' : 'bg-gray-200'
                    }`} />
                    <p className={`text-xs mt-1 ${
                      step >= s ? 'text-electric' : 'text-gray-400'
                    }`}>
                      {s === 1 ? 'Contact' : s === 2 ? 'Service' : 'Details'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 lg:p-8">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                      placeholder="Chinedu Okonkwo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                      placeholder="chinedu@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                      placeholder="08012345678"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-electric text-ice py-3 rounded-lg font-semibold hover:bg-electric-light transition-colors mt-4"
                  >
                    Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Type</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="payday">Payday Loan</option>
                      <option value="payroll">Payroll Loan</option>
                      <option value="stepup">Step-Up Loan</option>
                      <option value="sme">SME Loan</option>
                      <option value="asset">Asset Financing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Loan/Investment Amount (₦)</label>
                    <input
                      type="text"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                      placeholder="1,000,000"
                    />
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 bg-electric text-ice py-3 rounded-lg font-semibold hover:bg-electric-light transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Information</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors resize-none"
                      placeholder="Tell us more about your financial goals..."
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Summary</p>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-gray-500">Name:</span> <span className="font-medium text-ice">{formData.name}</span></p>
                      <p><span className="text-gray-500">Service:</span> <span className="font-medium text-ice">{formData.service || 'Not selected'}</span></p>
                      <p><span className="text-gray-500">Amount:</span> <span className="font-medium text-ice">₦{formData.amount || 'Not specified'}</span></p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-electric text-ice py-3 rounded-lg font-semibold hover:bg-electric-light transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ice mb-2">Inquiry Received!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in Irvin Global. Our team will contact you within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="bg-electric text-ice px-8 py-3 rounded-lg font-semibold hover:bg-electric-light transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
