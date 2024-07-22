async function fetchBalanceData() {
    const start = Math.floor(Date.now() / 1000) - 180 * 60; // 30 minutes ago
    const end = Math.floor(Date.now() / 1000); // Now
    const url = `http://152.53.38.82:9091/api/v1/query_range?query=miner_balances&start=${start}&end=${end}&step=600s`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching balance data:', error);
        return null;
    }
}

function parseBalanceData(prometheusData) {
    const labels = [];
    const data = [];

    if (prometheusData && prometheusData.data && prometheusData.data.result) {
        prometheusData.data.result.forEach((metric) => {
            metric.values.forEach(([timestamp, value]) => {
                labels.push(new Date(timestamp * 1000)); // Convert UNIX timestamp to JS Date
                data.push(parseFloat(value)); // Convert value to float
            });
        });
    }

    return { labels, data };
}

async function createBalanceChart() {
    const prometheusData = await fetchBalanceData();
    const { labels, data } = parseBalanceData(prometheusData);

    const ctx = document.getElementById('balanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Wallet Balance',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: true // This makes it an area chart
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'minute' // Change this as needed (e.g., 'second', 'hour')
                    },
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    beginAtZero: true,
                    suggestedMin: 0, // Ensure the Y-axis starts at 0 or adjust as needed
                    title: {
                        display: true,
                        text: 'Balance'
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', createBalanceChart);
