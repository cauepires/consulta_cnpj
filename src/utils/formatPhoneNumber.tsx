function formatPhoneNumber(phoneNumber: string): string {
    const code = phoneNumber.slice(0, 2)
    let phone

    if (phoneNumber.length === 10) {
        const phonePartOne = phoneNumber.slice(2, 6)
        const phonePartTwo = phoneNumber.slice(6, 10)
        
        phone = `${phonePartOne}-${phonePartTwo}`
    } else if (phoneNumber.length === 11) {
        const phonePartOne = phoneNumber.slice(2, 7)
        const phonePartTwo = phoneNumber.slice(7, 11)
        
        phone = `${phonePartOne}-${phonePartTwo}`
    }
    
  
    return `(${code}) ${phone}`
}

export { formatPhoneNumber }