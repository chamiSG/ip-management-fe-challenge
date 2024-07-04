export const formatDate = (date: string) => {
    const parseDate = new Date(date);

    // Specific locale and options
    const options: any = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    };
    return parseDate.toLocaleDateString('en-US', options); // "July 4, 2024"
}