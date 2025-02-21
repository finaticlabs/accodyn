'use client'

import { useState, useEffect, useCallback } from 'react'

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [loanAmountInput, setLoanAmountInput] = useState('500000')
  const [interestRate, setInterestRate] = useState(10.85)
  const [interestRateInput, setInterestRateInput] = useState('10.85')
  const [showAmountWarning, setShowAmountWarning] = useState(false)
  const [loanTerm, setLoanTerm] = useState(36)
  const [durationType, setDurationType] = useState<'Months' | 'Years'>('Months')
  const [emi, setEMI] = useState<number>(0)
  const [totalInterest, setTotalInterest] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [termInputValue, setTermInputValue] = useState<string>('36')
  const [showAmortizationTable, setShowAmortizationTable] = useState(false)
  const [amortizationSchedule, setAmortizationSchedule] = useState<Array<{
    month: number,
    emi: number,
    principal: number,
    interest: number,
    balance: number
  }>>([])

  const presetAmounts = [
    { label: '1L', value: 100000 },
    { label: '5L', value: 500000 },
    { label: '10L', value: 1000000 },
    { label: '20L', value: 2000000 },
    { label: '50L', value: 5000000 },
    { label: '1Cr', value: 10000000 },
  ]

  const calculateEMI = useCallback(() => {
    const principal = loanAmount
    const ratePerMonth = (interestRate / 12) / 100
    const months = durationType === 'Years' ? loanTerm * 12 : loanTerm

    const emiAmount = principal * ratePerMonth * Math.pow(1 + ratePerMonth, months) / (Math.pow(1 + ratePerMonth, months) - 1)
    const totalPayment = emiAmount * months
    const totalInterestPayment = totalPayment - principal

    setEMI(isNaN(emiAmount) ? 0 : emiAmount)
    setTotalInterest(isNaN(totalInterestPayment) ? 0 : totalInterestPayment)
    setTotalAmount(isNaN(totalPayment) ? principal : totalPayment)
  }, [loanAmount, interestRate, loanTerm, durationType])

  const calculateAmortizationSchedule = useCallback(() => {
    const months = durationType === 'Years' ? loanTerm * 12 : loanTerm
    const ratePerMonth = (interestRate / 12) / 100
    let balance = loanAmount
    const monthlyEMI = emi

    const schedule = []
    for (let i = 1; i <= months; i++) {
      const interest = balance * ratePerMonth
      const principal = monthlyEMI - interest
      balance = balance - principal

      schedule.push({
        month: i,
        emi: monthlyEMI,
        principal: principal,
        interest: interest,
        balance: Math.max(0, balance)
      })
    }

    setAmortizationSchedule(schedule)
  }, [loanAmount, interestRate, loanTerm, durationType, emi])

  useEffect(() => {
    calculateEMI()
  }, [calculateEMI])

  useEffect(() => {
    setTermInputValue(loanTerm.toString())
  }, [loanTerm])

  useEffect(() => {
    setLoanAmountInput(loanAmount.toLocaleString('en-IN'))
  }, [loanAmount])

  useEffect(() => {
    setInterestRateInput(interestRate.toString())
  }, [interestRate])

  useEffect(() => {
    if (showAmortizationTable) {
      calculateAmortizationSchedule()
    }
  }, [showAmortizationTable, calculateAmortizationSchedule])

  const formatCurrency = (amount: number) => {
    if (isNaN(amount)) {
      amount = 0
    }
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleLoanAmountChange = (value: string) => {
    const cleanValue = value.replace(/[^0-9]/g, '')
    setLoanAmountInput(cleanValue)
    const amount = Number(cleanValue)
    
    if (amount >= 50000 && amount <= 10000000) {
      setLoanAmount(amount)
      setShowAmountWarning(false)
    } else if (amount < 50000) {
      setShowAmountWarning(true)
    } else {
      setShowAmountWarning(false)
    }
  }

  const handleInterestRateChange = (value: string) => {
    setInterestRateInput(value)
    const rate = Number(value.replace(/[^0-9.]/g, ''))
    
    if (rate >= 0 && rate <= 40) {
      setInterestRate(rate)
    }
  }

  const handleLoanTermChange = (value: string) => {
    setTermInputValue(value)
    const term = Number(value.replace(/[^0-9]/g, ''))
    const maxTerm = durationType === 'Years' ? 30 : 360
    const minTerm = durationType === 'Years' ? 1 : 12
    
    if (!isNaN(term)) {
      if (term >= minTerm && term <= maxTerm) {
        setLoanTerm(term)
      } else if (term > maxTerm) {
        setLoanTerm(maxTerm)
        setTermInputValue(maxTerm.toString())
      } else if (term < minTerm && value !== '') {
        setLoanTerm(minTerm)
        setTermInputValue(minTerm.toString())
      }
    }
  }

  const handleDurationTypeChange = (type: 'Months' | 'Years') => {
    if (type === durationType) return;
    
    if (type === 'Years') {
      const years = Math.round(loanTerm / 12);
      const newTerm = Math.max(1, Math.min(30, years));
      setLoanTerm(newTerm);
      setTermInputValue(newTerm.toString());
    } else {
      const months = loanTerm * 12;
      setLoanTerm(months);
      setTermInputValue(months.toString());
    }
    setDurationType(type);
  }

  const handleViewAmortizationTable = () => {
    const totalMonths = durationType === 'Years' ? loanTerm * 12 : loanTerm
    if (totalMonths > 36) {
      alert('Amortization table can only be viewed for loan terms up to 3 years')
      return
    }
    setShowAmortizationTable(!showAmortizationTable)
  }

  return (
    <main>
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 px-4 py-8 sm:py-12 max-w-7xl mx-auto">
        {/* Left Column - Calculator and Amortization */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Calculator Section */}
          <div className="w-full bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-light text-white mb-8">Calculate EMI for your Loan</h1>
            
            <div className="space-y-12">
              {/* Loan Amount Section */}
              <div>
                <div className="flex flex-col mb-3">
                  <label className="text-sm text-white/80 mb-2">Amount</label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={loanAmountInput}
                      onChange={(e) => handleLoanAmountChange(e.target.value)}
                      onBlur={() => {
                        const amount = Number(loanAmountInput.replace(/[^0-9]/g, ''))
                        if (amount < 50000) {
                          setLoanAmount(50000)
                          setLoanAmountInput('50,000')
                        }
                        setShowAmountWarning(false)
                      }}
                      className="w-48 px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-right text-sm focus:outline-none focus:border-white/20"
                    />
                    {showAmountWarning && (
                      <div className="text-red-400 text-xs">
                        Minimum loan amount is ₹50,000
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => {
                    const newValue = Number(e.target.value)
                    setLoanAmount(newValue)
                    setLoanAmountInput(newValue.toLocaleString('en-IN'))
                    setShowAmountWarning(false)
                  }}
                  className="w-full h-2 mb-4 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="grid grid-cols-6 gap-2">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount.value}
                      onClick={() => {
                        setLoanAmount(amount.value)
                        setLoanAmountInput(amount.value.toLocaleString('en-IN'))
                      }}
                      className={`py-2 rounded-lg text-sm transition-colors border border-white/10 hover:border-white/20 ${
                        loanAmount === amount.value
                          ? 'bg-white/20 text-white border-white/20'
                          : 'bg-black/20 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      {amount.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Rate Section */}
              <div>
                <div className="flex flex-col mb-3">
                  <label className="text-sm text-white/80 mb-2">Interest Rate (p.a)</label>
                  <div className="relative w-48">
                    <input
                      type="text"
                      value={interestRateInput}
                      onChange={(e) => handleInterestRateChange(e.target.value)}
                      onBlur={() => {
                        const rate = Number(interestRateInput)
                        if (rate < 0) {
                          setInterestRate(0)
                          setInterestRateInput('0')
                        } else if (rate > 40) {
                          setInterestRate(40)
                          setInterestRateInput('40')
                        } else if (!isNaN(rate)) {
                          setInterestRate(rate)
                          setInterestRateInput(rate.toString())
                        } else {
                          setInterestRateInput(interestRate.toString())
                        }
                      }}
                      className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-right text-sm focus:outline-none focus:border-white/20 pr-8"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white/60">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => {
                    const newValue = Number(e.target.value)
                    setInterestRate(newValue)
                    setInterestRateInput(newValue.toString())
                  }}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Loan Term Section */}
              <div>
                <div className="flex flex-col mb-3">
                  <label className="text-sm text-white/80 mb-2">Duration</label>
                  <div className="flex gap-4">
                    <div className="relative w-48">
                      <input
                        type="text"
                        value={termInputValue}
                        onChange={(e) => handleLoanTermChange(e.target.value)}
                        onBlur={() => {
                          // On blur, ensure the input shows the actual term value
                          setTermInputValue(loanTerm.toString())
                        }}
                        className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-right text-sm focus:outline-none focus:border-white/20 pr-20"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white/60">{durationType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDurationTypeChange('Months')}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                          durationType === 'Months'
                            ? 'bg-white/20 text-white'
                            : 'bg-black/20 text-white/60 hover:bg-white/10'
                        }`}
                      >
                        Months
                      </button>
                      <button
                        onClick={() => handleDurationTypeChange('Years')}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                          durationType === 'Years'
                            ? 'bg-white/20 text-white'
                            : 'bg-black/20 text-white/60 hover:bg-white/10'
                        }`}
                      >
                        Years
                      </button>
                    </div>
                  </div>
                </div>
                <input
                  type="range"
                  min={durationType === 'Years' ? '1' : '12'}
                  max={durationType === 'Years' ? '30' : '360'}
                  step={durationType === 'Years' ? '0.5' : '12'}
                  value={loanTerm}
                  onChange={(e) => {
                    const newValue = Number(e.target.value);
                    setLoanTerm(newValue);
                    setTermInputValue(newValue.toString());
                  }}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-6 text-xs text-white/40 italic">
              Disclaimer: Our Personal Loan EMI calculator offers estimated monthly installments which are indicative and tentative and are based upon the details populated by the user. Actual loan terms and eligibility are subject to bank approval. For precise loan details, consult our representatives before decisions based on these estimates.
            </div>

            {/* Amortization Table Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleViewAmortizationTable}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors border border-white/10"
              >
                {showAmortizationTable ? 'Hide' : 'View'} Amortization Table
              </button>
            </div>
          </div>

          {/* Amortization Table */}
          {showAmortizationTable && (
            <div className="w-full bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6 sm:p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-white">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="px-4 py-2 text-left">Month</th>
                      <th className="px-4 py-2 text-right">EMI</th>
                      <th className="px-4 py-2 text-right">Principal</th>
                      <th className="px-4 py-2 text-right">Interest</th>
                      <th className="px-4 py-2 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {amortizationSchedule.map((row) => (
                      <tr key={row.month} className="border-b border-white/5">
                        <td className="px-4 py-2">{row.month}</td>
                        <td className="px-4 py-2 text-right">{formatCurrency(row.emi)}</td>
                        <td className="px-4 py-2 text-right">{formatCurrency(row.principal)}</td>
                        <td className="px-4 py-2 text-right">{formatCurrency(row.interest)}</td>
                        <td className="px-4 py-2 text-right">{formatCurrency(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Results Card */}
        <div className="w-full lg:w-1/3 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-lg text-white/80 mb-4">Monthly EMI</h2>
            <p className="text-4xl font-medium text-white">
              {formatCurrency(emi)}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-sm text-white/60">Principal Amount</span>
              <span className="text-sm text-white">{formatCurrency(loanAmount)}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-sm text-white/60">Total Interest</span>
              <span className="text-sm text-white">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-sm text-white/60">Total Amount</span>
              <span className="text-sm text-white">{formatCurrency(totalAmount)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 