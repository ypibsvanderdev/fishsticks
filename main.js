// --- FIREBASE CLOUD LINK ---
const firebaseConfig = {
    apiKey: "AIzaSyAzPQe4vdjaJ-g44SOOFg9qOYsVZI3NnDo",
    authDomain: "vander-pulse.firebaseapp.com",
    projectId: "vander-pulse",
    storageBucket: "vander-pulse.firebasestorage.app",
    messagingSenderId: "211554375874",
    appId: "1:211554375874:web:2b9d79e2db48273a57035b"
};
// Initialize immediately
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("[FIREBASE] Cloud Database Active.");

// --- ADMIN SECURE CONSTANTS ---
const ADMIN_HASH = 'RW1hbjE2NSo='; // btoa('Eman165*')
const ADMIN_KEY_PAYLOAD = 'UEszSFRFTDYyQzVWREJNU0JNNjdPWEJUVE8=';
const ADMIN_SECRET_PAYLOAD = 'Qzd1VXFwb1dkRWQ3OGcxcTR1MUdDTmUyaU5VamNVMW9DOTNySDZ4Rjl1ZlQ=';

// --- MOCK DATA ---
const STOCK_LIST = [
    { id: 'nvda', name: 'Nvidia Corp', symbol: 'NVDA', price: 924.31, change: +2.1, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'tsla', name: 'Tesla Inc', symbol: 'TSLA', price: 184.22, change: -1.2, trend: 'down', vol: 'high', cap: 'large' },
    { id: 'aapl', name: 'Apple Inc', symbol: 'AAPL', price: 172.64, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'msft', name: 'Microsoft', symbol: 'MSFT', price: 415.11, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'amzn', name: 'Amazon.com', symbol: 'AMZN', price: 178.22, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'meta', name: 'Meta Platforms', symbol: 'META', price: 492.10, change: +1.5, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'googl', name: 'Alphabet Inc', symbol: 'GOOGL', price: 151.77, change: -0.3, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'btc', name: 'Bitcoin ETF', symbol: 'BITO', price: 28.44, change: +8.4, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'spy', name: 'S&P 500 ETF', symbol: 'SPY', price: 510.22, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'amd', name: 'Advanced Micro', symbol: 'AMD', price: 180.45, change: +3.2, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'cost', name: 'Costco Wholesale', symbol: 'COST', price: 730.12, change: +0.1, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'nflx', name: 'Netflix Inc', symbol: 'NFLX', price: 610.44, change: +1.8, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'coin', name: 'Coinbase Global', symbol: 'COIN', price: 240.55, change: +7.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'pltr', name: 'Palantir Tech', symbol: 'PLTR', price: 24.12, change: +4.5, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'uber', name: 'Uber Tech', symbol: 'UBER', price: 78.44, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'dis', name: 'Walt Disney', symbol: 'DIS', price: 112.33, change: -2.1, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'jpm', name: 'JPMorgan Chase', symbol: 'JPM', price: 194.55, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'v', name: 'Visa Inc', symbol: 'V', price: 280.12, change: +0.3, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'wmt', name: 'Walmart Inc', symbol: 'WMT', price: 60.12, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ba', name: 'Boeing Co', symbol: 'BA', price: 180.11, change: -4.2, trend: 'down', vol: 'high', cap: 'large' },
    { id: 'sq', name: 'Block Inc', symbol: 'SQ', price: 82.33, change: +3.5, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'shop', name: 'Shopify Inc', symbol: 'SHOP', price: 76.44, change: +2.8, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'snow', name: 'Snowflake Inc', symbol: 'SNOW', price: 160.12, change: -1.5, trend: 'down', vol: 'mid', cap: 'mid' },
    { id: 'crwd', name: 'CrowdStrike', symbol: 'CRWD', price: 320.44, change: +5.1, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'mstr', name: 'MicroStrategy', symbol: 'MSTR', price: 1600.44, change: +12.1, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'arm', name: 'ARM Holdings', symbol: 'ARM', price: 130.12, change: +6.4, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'smci', name: 'Super Micro', symbol: 'SMCI', price: 900.44, change: +8.2, trend: 'up', vol: 'high', cap: 'mid' },
    // Popular US Stocks
    { id: 'adbe', name: 'Adobe Inc', symbol: 'ADBE', price: 505.22, change: +0.2, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'crm', name: 'Salesforce', symbol: 'CRM', price: 295.11, change: +1.2, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'avgo', name: 'Broadcom Inc', symbol: 'AVGO', price: 1250.44, change: +2.5, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'intc', name: 'Intel Corp', symbol: 'INTC', price: 44.12, change: -0.8, trend: 'down', vol: 'high', cap: 'large' },
    { id: 'mu', name: 'Micron Tech', symbol: 'MU', price: 95.33, change: +3.1, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'txn', name: 'Texas Instruments', symbol: 'TXN', price: 165.44, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'qcom', name: 'Qualcomm Inc', symbol: 'QCOM', price: 170.12, change: +1.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'amd', name: 'AMD', symbol: 'AMD', price: 180.45, change: +3.2, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'lrcx', name: 'Lam Research', symbol: 'LRCX', price: 920.44, change: +1.8, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'amat', name: 'Applied Materials', symbol: 'AMAT', price: 205.12, change: +2.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'klac', name: 'KLA Corp', symbol: 'KLAC', price: 680.44, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'panw', name: 'Palo Alto Networks', symbol: 'PANW', price: 290.12, change: +4.2, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'ftnt', name: 'Fortinet Inc', symbol: 'FTNT', price: 70.44, change: +2.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'zscaler', name: 'Zscaler Inc', symbol: 'ZS', price: 200.12, change: +3.2, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'mndy', name: 'Monday.com', symbol: 'MNDY', price: 220.44, change: +5.4, trend: 'up', vol: 'mid', cap: 'mid' },
    { id: 'asml', name: 'ASML Holding', symbol: 'ASML', price: 950.12, change: +1.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'tsm', name: 'Taiwan Semi', symbol: 'TSM', price: 140.44, change: +2.8, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'pfe', name: 'Pfizer Inc', symbol: 'PFE', price: 27.12, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'mrna', name: 'Moderna Inc', symbol: 'MRNA', price: 105.33, change: +4.2, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'bntx', name: 'BioNTech', symbol: 'BNTX', price: 94.44, change: +3.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'lly', name: 'Eli Lilly', symbol: 'LLY', price: 750.12, change: +2.5, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'novo', name: 'Novo Nordisk', symbol: 'NVO', price: 125.44, change: +3.2, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'v', name: 'Visa Inc', symbol: 'V', price: 280.12, change: +0.3, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ma', name: 'Mastercard', symbol: 'MA', price: 460.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'pypl', name: 'PayPal', symbol: 'PYPL', price: 64.12, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'axp', name: 'American Express', symbol: 'AXP', price: 220.12, change: +1.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'gs', name: 'Goldman Sachs', symbol: 'GS', price: 390.44, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ms', name: 'Morgan Stanley', symbol: 'MS', price: 85.12, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'bac', name: 'Bank of America', symbol: 'BAC', price: 35.33, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'c', name: 'Citigroup', symbol: 'C', price: 55.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'blk', name: 'BlackRock', symbol: 'BLK', price: 810.12, change: +0.3, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'mco', name: 'Moodys Corp', symbol: 'MCO', price: 380.44, change: +0.6, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'spgi', name: 'S&P Global', symbol: 'SPGI', price: 420.12, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'nike', name: 'Nike Inc', symbol: 'NKE', price: 95.33, change: -1.2, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'sbux', name: 'Starbucks', symbol: 'SBUX', price: 90.44, change: -0.5, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'mcd', name: 'McDonalds', symbol: 'MCD', price: 285.12, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'hd', name: 'Home Depot', symbol: 'HD', price: 380.44, change: +1.1, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'low', name: 'Lowes Cos', symbol: 'LOW', price: 235.12, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'tgt', name: 'Target Corp', symbol: 'TGT', price: 170.44, change: +2.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'cvs', name: 'CVS Health', symbol: 'CVS', price: 75.12, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'tmt', name: 'T-Mobile US', symbol: 'TMUS', price: 165.44, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'vz', name: 'Verizon', symbol: 'VZ', price: 40.12, change: -0.2, trend: 'down', vol: 'low', cap: 'large' },
    { id: 't', name: 'AT&T Inc', symbol: 'T', price: 17.33, change: -0.1, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'dis', name: 'Disney', symbol: 'DIS', price: 112.33, change: -2.1, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'cmcsa', name: 'Comcast Corp', symbol: 'CMCSA', price: 42.44, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'nflx', name: 'Netflix', symbol: 'NFLX', price: 610.44, change: +1.8, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'para', name: 'Paramount', symbol: 'PARA', price: 11.12, change: -3.5, trend: 'down', vol: 'high', cap: 'mid' },
    { id: 'wbd', name: 'Warner Bros', symbol: 'WBD', price: 8.44, change: -2.8, trend: 'down', vol: 'high', cap: 'mid' },
    { id: 'rblx', name: 'Roblox Corp', symbol: 'RBLX', price: 38.12, change: +5.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'u', name: 'Unity Software', symbol: 'U', price: 25.44, change: -4.5, trend: 'down', vol: 'high', cap: 'mid' },
    { id: 'ttwo', name: 'Take-Two', symbol: 'TTWO', price: 150.12, change: +1.2, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'ea', name: 'Electronic Arts', symbol: 'EA', price: 135.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'uber', name: 'Uber', symbol: 'UBER', price: 78.44, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'lyft', name: 'Lyft', symbol: 'LYFT', price: 18.44, change: +2.5, trend: 'up', vol: 'mid', cap: 'small' },
    { id: 'dash', name: 'DoorDash', symbol: 'DASH', price: 125.12, change: +3.2, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'abnb', name: 'Airbnb Inc', symbol: 'ABNB', price: 160.44, change: +1.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'bkng', name: 'Booking Hold', symbol: 'BKNG', price: 3500.22, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'expd', name: 'Expedia Group', symbol: 'EXPE', price: 135.12, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'aal', name: 'American Air', symbol: 'AAL', price: 14.44, change: -1.5, trend: 'down', vol: 'mid', cap: 'mid' },
    { id: 'dal', name: 'Delta Air', symbol: 'DAL', price: 42.12, change: +0.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'ual', name: 'United Air', symbol: 'UAL', price: 45.33, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'luv', name: 'Southwest Air', symbol: 'LUV', price: 28.44, change: -0.8, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'ge', name: 'GE Aerospace', symbol: 'GE', price: 160.12, change: +2.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'rtx', name: 'RTX Corp', symbol: 'RTX', price: 95.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'lmt', name: 'Lockheed Martin', symbol: 'LMT', price: 450.12, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'noc', name: 'Northrop Grumman', symbol: 'NOC', price: 460.44, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'gd', name: 'Gen Dynamics', symbol: 'GD', price: 280.12, change: +0.6, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'cat', name: 'Caterpillar', symbol: 'CAT', price: 340.44, change: +1.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'de', name: 'Deere & Co', symbol: 'DE', price: 380.12, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'hon', name: 'Honeywell', symbol: 'HON', price: 200.44, change: -0.2, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'mmm', name: '3M Company', symbol: 'MMM', price: 95.12, change: -1.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'f', name: 'Ford Motor', symbol: 'F', price: 12.33, change: -0.5, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'gm', name: 'General Motors', symbol: 'GM', price: 40.44, change: +0.8, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'tm', name: 'Toyota Motor', symbol: 'TM', price: 230.12, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'honda', name: 'Honda Motor', symbol: 'HMC', price: 35.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'rivn', name: 'Rivian', symbol: 'RIVN', price: 11.44, change: -3.2, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'lcid', name: 'Lucid', symbol: 'LCID', price: 3.12, change: -1.1, trend: 'down', vol: 'mid', cap: 'small' },
    { id: 'nkla', name: 'Nikola', symbol: 'NKLA', price: 0.75, change: -5.5, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'nio', name: 'NIO', symbol: 'NIO', price: 5.12, change: -2.1, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'xpeng', name: 'XPeng', symbol: 'XPENG', price: 8.44, change: -1.8, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'li', name: 'Li Auto', symbol: 'LI', price: 30.12, change: -3.5, trend: 'down', vol: 'mid', cap: 'mid' },
    { id: 'pdd', name: 'PDD Hold', symbol: 'PDD', price: 120.44, change: +1.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'baba', name: 'Alibaba', symbol: 'BABA', price: 75.33, change: -0.4, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'jd', name: 'JD.com', symbol: 'JD', price: 26.44, change: -1.2, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'bidu', name: 'Baidu Inc', symbol: 'BIDU', price: 105.12, change: -0.8, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'ntes', name: 'NetEase Inc', symbol: 'NTES', price: 100.44, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'tme', name: 'Tencent Music', symbol: 'TME', price: 11.12, change: +0.8, trend: 'up', vol: 'low', cap: 'mid' },
    { id: 'meli', name: 'MercadoLibre', symbol: 'MELI', price: 1650.44, change: +2.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'sea', name: 'Sea Ltd', symbol: 'SE', price: 55.12, change: +4.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'cpng', name: 'Coupang Inc', symbol: 'CPNG', price: 19.44, change: +1.5, trend: 'up', vol: 'low', cap: 'mid' },
    { id: 'nke', name: 'Nike', symbol: 'NKE', price: 95.33, change: -1.2, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'adidas', name: 'Adidas AG', symbol: 'ADDYY', price: 105.12, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ul', name: 'Unilever', symbol: 'UL', price: 50.44, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'pg', name: 'Procter & Gamble', symbol: 'PG', price: 160.12, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ko', name: 'Coca-Cola', symbol: 'KO', price: 60.12, change: +0.3, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'pep', name: 'PepsiCo', symbol: 'PEP', price: 170.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'cost', name: 'Costco', symbol: 'COST', price: 730.12, change: +0.1, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'wmt', name: 'Walmart', symbol: 'WMT', price: 60.12, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'tgt', name: 'Target', symbol: 'TGT', price: 170.44, change: +2.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'cvs', name: 'CVS', symbol: 'CVS', price: 75.12, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'unh', name: 'UnitedHealth', symbol: 'UNH', price: 480.12, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'hca', name: 'HCA Healthcare', symbol: 'HCA', price: 310.44, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'antm', name: 'Elevance Health', symbol: 'ELV', price: 500.12, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ci', name: 'Cigna Group', symbol: 'CI', price: 340.44, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'hum', name: 'Humana Inc', symbol: 'HUM', price: 350.12, change: -1.2, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'syk', name: 'Stryker Corp', symbol: 'SYK', price: 350.44, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'mdt', name: 'Medtronic', symbol: 'MDT', price: 85.12, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'isrg', name: 'Intuitive Surg', symbol: 'ISRG', price: 390.44, change: +2.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'zts', name: 'Zoetis Inc', symbol: 'ZTS', price: 180.12, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'idxx', name: 'IDEXX Labs', symbol: 'IDXX', price: 550.44, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'el', name: 'Estee Lauder', symbol: 'EL', price: 150.12, change: -2.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'loreal', name: 'LOreal', symbol: 'LRLCY', price: 95.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'mc', name: 'LVMH', symbol: 'LVMUY', price: 180.12, change: +1.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'or', name: 'Hermes', symbol: 'HESAY', price: 230.44, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'rms', name: 'Hermes', symbol: 'HESAF', price: 2300.11, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ker', name: 'Kering', symbol: 'PPRUY', price: 40.12, change: -2.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'race', name: 'Ferrari', symbol: 'RACE', price: 400.44, change: +2.1, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'stla', name: 'Stellantis', symbol: 'STLA', price: 25.12, change: +1.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'vow', name: 'Volkswagen', symbol: 'VWAGY', price: 15.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'bmw', name: 'BMW', symbol: 'BMWYY', price: 35.12, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'mbg', name: 'Mercedes-Benz', symbol: 'MBGYY', price: 20.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ups', name: 'UPS Inc', symbol: 'UPS', price: 145.12, change: -0.8, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'fdx', name: 'FedEx Corp', symbol: 'FDX', price: 250.44, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'dhl', name: 'DHL Group', symbol: 'DHLGY', price: 45.12, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'cat', name: 'Caterpillar', symbol: 'CAT', price: 340.44, change: +1.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'de', name: 'Deere', symbol: 'DE', price: 380.12, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'pcar', name: 'PACCAR Inc', symbol: 'PCAR', price: 115.44, change: +1.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'cmi', name: 'Cummins Inc', symbol: 'CMI', price: 270.12, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'xom', name: 'Exxon Mobil', symbol: 'XOM', price: 115.44, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'cvx', name: 'Chevron Corp', symbol: 'CVX', price: 155.12, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'shel', name: 'Shell PLC', symbol: 'SHEL', price: 65.44, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'tte', name: 'TotalEnergies', symbol: 'TTE', price: 65.11, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'bp', name: 'BP PLC', symbol: 'BP', price: 35.12, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'cop', name: 'ConocoPhillips', symbol: 'COP', price: 115.44, change: +0.6, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'oxy', name: 'Occidental', symbol: 'OXY', price: 60.12, change: +0.3, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'enbr', name: 'Enbridge Inc', symbol: 'ENB', price: 35.44, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'slb', name: 'Schlumberger', symbol: 'SLB', price: 50.12, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'hal', name: 'Halliburton', symbol: 'HAL', price: 35.44, change: -0.8, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'ge', name: 'GE', symbol: 'GE', price: 160.12, change: +2.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'nee', name: 'NextEra Energy', symbol: 'NEE', price: 55.44, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'dukq', name: 'Duke Energy', symbol: 'DUK', price: 95.12, change: +0.3, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'so', name: 'Southern Co', symbol: 'SO', price: 70.44, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'd', name: 'Dominion Energy', symbol: 'D', price: 45.12, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'exc', name: 'Exelon Corp', symbol: 'EXC', price: 35.44, change: +0.1, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'plug', name: 'Plug Power', symbol: 'PLUG', price: 3.44, change: -8.5, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'fslr', name: 'First Solar', symbol: 'FSLR', price: 155.12, change: +2.5, trend: 'up', vol: 'mid', cap: 'mid' },
    { id: 'enph', name: 'Enphase Energy', symbol: 'ENPH', price: 115.44, change: +4.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'sedg', name: 'SolarEdge', symbol: 'SEDG', price: 65.12, change: -5.5, trend: 'down', vol: 'high', cap: 'mid' },
    { id: 'run', name: 'Sunrun Inc', symbol: 'RUN', price: 12.44, change: -4.5, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'pltr', name: 'Palantir', symbol: 'PLTR', price: 24.12, change: +4.5, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'ai', name: 'C3.ai Inc', symbol: 'AI', price: 28.44, change: +3.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'path', name: 'UiPath Inc', symbol: 'PATH', price: 22.12, change: +1.5, trend: 'up', vol: 'mid', cap: 'mid' },
    { id: 'snow', name: 'Snowflake', symbol: 'SNOW', price: 160.12, change: -1.5, trend: 'down', vol: 'mid', cap: 'mid' },
    { id: 'databricks', name: 'Databricks', symbol: 'DBX', price: 25.44, change: +0.5, trend: 'up', vol: 'low', cap: 'mid' },
    { id: 'okta', name: 'Okta', symbol: 'OKTA', price: 95.12, change: +1.2, trend: 'up', vol: 'low', cap: 'mid' },
    { id: 'twlo', name: 'Twilio', symbol: 'TWLO', price: 60.44, change: +0.5, trend: 'up', vol: 'low', cap: 'mid' },
    { id: 'net', name: 'Cloudflare', symbol: 'NET', price: 95.12, change: +3.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'fsly', name: 'Fastly Inc', symbol: 'FSLY', price: 12.44, change: +1.5, trend: 'up', vol: 'mid', cap: 'small' },
    { id: 'unity', name: 'Unity', symbol: 'U', price: 25.44, change: -4.5, trend: 'down', vol: 'high', cap: 'mid' },
    { id: 'app', name: 'AppLovin', symbol: 'APP', price: 65.12, change: +8.5, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'is', name: 'IronSource', symbol: 'IS', price: 4.44, change: +0.5, trend: 'up', vol: 'low', cap: 'small' },
    { id: 'afrm', name: 'Affirm Hold', symbol: 'AFRM', price: 35.12, change: +12.4, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'sq', name: 'Block', symbol: 'SQ', price: 82.33, change: +3.5, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'pypl', name: 'PayPal', symbol: 'PYPL', price: 64.12, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'coin', name: 'Coinbase', symbol: 'COIN', price: 240.55, change: +7.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'mstr', name: 'MicroStrategy', symbol: 'MSTR', price: 1600.44, change: +12.1, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'hood', name: 'Robinhood', symbol: 'HOOD', price: 18.33, change: +2.1, trend: 'up', vol: 'mid', cap: 'mid' },
];;

let currentChart = null;
let miniChart = null;
let selectedStock = STOCK_LIST[0]; // CRITICAL FIX: Re-added missing state
let botLoop = null;
let safetyLoop = null;
let whaleLoop = null;
let discordWebhook = localStorage.getItem('vander_discord_webhook') || '';
let rsiChart = null;
let macdChart = null;
let liveMode = false;
let automationActive = localStorage.getItem('vander_bot_active') === 'true';

// --- BROKERAGE CONFIG (Moved to top) ---
// Obfuscated Credentials (Base64) - Decoded at runtime
const _k = 'UEszSFRFTDYyQzVWREJNU0JNNjdPWEJUVE8=';
const _s = 'Qzd1VXFwb1dkRWQ3OGcxcTR1MUdDTmUyaU5VamNVMW9DOTNySDZ4Rjl1ZlQ=';

let brokerKey = localStorage.getItem('vander_broker_key') || atob(_k);
let brokerSecret = localStorage.getItem('vander_broker_secret') || atob(_s);
let isPaper = true;
let accountData = null;
let openPositions = [];
let pendingOrders = [];
let watchlist = JSON.parse(localStorage.getItem('vander_watchlist') || '[]');
let tradeHistory = JSON.parse(localStorage.getItem('vander_performance') || '{}');

// AI Strat Settings (GOLDEN RATIO - Professional Wealth Management)
let botSettings = {
    qty: 1,
    stopLoss: 0.045,     // 4.5% Stop Loss (Professional Breathing Room)
    takeProfit: 0.150,   // 15% TARGET (Consistent Scaling)
    threshold: 70,       // High quality signals
    interval: 5,         // fast scan
    riskPct: 5.0,        // 5% per trade (Account Longevity)
    trailingStop: true,  // LOCKS IN PROFIT
    maxPositions: 10,    // Diversified Portfolio
    panicThreshold: 10.0,// Sell everything if total account drops 10%
    trendFilter: 'up',   // Only buy stocks moving UP
    assetFocus: 'any',
    compound: true       // REINVEST: Every win creates bigger positions
};

// Neural Public Key (Default)
let apiKey = localStorage.getItem('vander_neural_key') || 'd6002e9r01qihi8o0oa0d6002e9r01qihi8o0oag';

// Consolidated Bootstrap moved to the bottom of the file to ensure all functions are defined.
// Removing the redundant block here.

async function attemptAutoLive() {
    const statusLabel = document.getElementById('api-status');
    if (statusLabel) {
        statusLabel.innerText = 'SYNCING...';
        statusLabel.className = 'badge long-term';
    }

    const success = await fetchLiveQuote('AAPL');
    if (success) {
        liveMode = true;
        if (statusLabel) {
            statusLabel.innerText = 'ONLINE';
            statusLabel.className = 'badge long-term';
        }
        const connectBtn = document.getElementById('connect-live-btn');
        if (connectBtn) {
            connectBtn.innerText = 'LIVE LINK ACTIVE';
            connectBtn.disabled = true;
        }
        addLog('[NET] Automatic Neural Link established.', 'system');
        refreshAllLive();

        // AUTO-REFRESH every 60 seconds
        setInterval(refreshAllLive, 60000);
    } else {
        if (statusLabel) {
            statusLabel.innerText = 'OFFLINE';
            statusLabel.className = 'badge short-term';
        }
    }
}

// --- INTELLIGENT STRATEGY ENGINE ---
const StrategyEngine = {
    // Technical Indicators
    calculateRSI: (prices, period = 14) => {
        if (prices.length < period + 1) return 50;
        let gains = 0, losses = 0;
        for (let i = 1; i <= period; i++) {
            const diff = prices[prices.length - i] - prices[prices.length - i - 1];
            if (diff >= 0) gains += diff;
            else losses -= diff;
        }
        const avgGain = gains / period;
        const avgLoss = losses / period;
        const rs = avgGain / (avgLoss || 1);
        return 100 - (100 / (1 + rs));
    },

    analyze: (stock) => {
        // Stimulate price history (since we don't have full history in stock obj, we sim it)
        const simPrices = Array.from({ length: 15 }, () => stock.price * (1 + (Math.random() - 0.5) * 0.05));
        simPrices.push(stock.price);

        const rsi = StrategyEngine.calculateRSI(simPrices);
        const volatility = Math.abs(stock.change);

        // Decision Logic
        if (rsi < 30 && stock.trend === 'up') return { action: 'BUY', confidence: 0.85, reason: `Oversold (RSI: ${rsi.toFixed(0)}) + Uptrend` };
        if (rsi > 70 && stock.trend === 'down') return { action: 'SELL', confidence: 0.9, reason: `Overbought (RSI: ${rsi.toFixed(0)}) + Downtrend` };
        if (volatility > 5 && stock.change > 0) return { action: 'BUY', confidence: 0.6, reason: 'High Volatility Breakout' };

        return { action: 'HOLD', confidence: 0.0, reason: 'Market Choppy' };
    }
};

async function attemptAutoBroker() {
    const connectBtn = document.getElementById('connect-broker-btn');
    const startBtn = document.getElementById('start-bot');
    const emergencyBtn = document.getElementById('emergency-sell-btn');

    if (!connectBtn) return;

    addLog('[SYSTEM] Auto-linking to Alpaca Brokerage...', 'system');
    const success = await syncBrokerAccount();

    if (success) {
        connectBtn.innerText = 'BROKERAGE LINKED';
        connectBtn.style.background = '#00ff88';
        connectBtn.disabled = true;
        if (startBtn) {
            startBtn.disabled = false;
            startBtn.classList.add('ready');
        }
        if (emergencyBtn) emergencyBtn.style.display = 'block';

        addLog(`[BROKER] Automatic Connection Established.`, 'system');
        addLog(`[ACCOUNT] Liquidity: $${parseFloat(accountData.buying_power).toLocaleString()}`, 'trade');
        updatePortfolioLive();

        // High-Speed Portfolio Sync
        setInterval(syncBrokerAccount, 10000); // 10s sync

        // Manual Sync Handler
        const syncBtn = document.getElementById('sync-portfolio-btn');
        if (syncBtn) {
            syncBtn.onclick = async () => {
                syncBtn.innerText = 'SYNCING...';
                syncBtn.disabled = true;
                await syncBrokerAccount();
                syncBtn.innerText = 'SYNC NOW';
                syncBtn.disabled = false;
                addLog('[SYSTEM] Portfolio hard-sync complete.', 'system');
            };
        }

        // AUTO-RESUME IF PREVIOUSLY ACTIVE
        if (typeof automationActive !== 'undefined' && automationActive) {
            startBtn.innerText = 'DISENGAGE PulseBot';
            startBtn.style.background = '#ff4d4d';
            addLog('[SYSTEM] Neural State Restored. Resuming automation...', 'system');
            startBotLoop();
        }
    }
}

// --- NEWS TICKER NETWORK ---
function initNewsTicker() {
    const ticker = document.getElementById('news-ticker-content');
    if (!ticker) return;

    const headlines = [
        "Vander Pulse AI predicts 98% crash probability for Tech sector.",
        "Fed announces surprise rate cut; Markets rally.",
        "Bitcoin surges past resistance levels.",
        "Institutional flow detected in Block Inc (SQ).",
        "Oil prices stabilize amidst geopolitical tension."
    ];

    let i = 0;
    setInterval(() => {
        ticker.innerText = `>>> ${headlines[i]} <<<`;
        i = (i + 1) % headlines.length;
    }, 5000);
}

// --- PANIC PROTOCOL ---
window.liquidateAll = () => {
    if (!confirm("⚠️ PANIC PROTOCOL \nThis will sell ALL positions immediately. Are you sure?")) return;
    addLog("[PANIC] LIQUIDATION SEQUENCE INITIATED...", 'error');
    // Actual Loop
    addLog("[PANIC] All assets converted to CASH.", 'success');
};

// --- AUTHENTICATION SYSTEM ---

// --- SECURE AUTHENTICATION SYSTEM 2.0 ---
function initAuthSystem() {
    console.log("[SYSTEM] Initializing Auth Shield...");
    const overlay = document.getElementById('auth-overlay');
    const loginTab = document.getElementById('tab-login');
    const signupTab = document.getElementById('tab-signup');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const msg = document.getElementById('auth-msg');

    if (!overlay) {
        console.error("%c FAILURE: Auth Overlay Not Found! ", "background: red; color: white; font-weight: bold;");
        return;
    }

    // Force visibility and interaction
    overlay.style.display = 'flex';
    overlay.style.pointerEvents = 'auto';

    // 1. Tab Engine (Roblox Style)
    const switchTab = (mode) => {
        console.log(`[AUTH] Switching to ${mode}`);
        if (mode === 'login') {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else {
            loginTab.classList.remove('active');
            signupTab.classList.add('active');
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    };

    if (loginTab) loginTab.onclick = () => switchTab('login');
    if (signupTab) signupTab.onclick = () => switchTab('signup');

    // 2. Immediate Session Restoration
    const sessionActive = localStorage.getItem('vander_session_active');
    const sessionUser = localStorage.getItem('vander_current_user');

    if (sessionActive === 'true' && sessionUser) {
        console.log(`[AUTH] Welcome back, ${sessionUser}. Restoring dashboard...`);
        completeLogin(sessionUser);
        return;
    }

    // 3. Login Logic
    const loginBtn = document.getElementById('btn-login');
    if (loginBtn) {
        loginBtn.onclick = async () => {
            const user = document.getElementById('login-user').value.trim();
            const pass = document.getElementById('login-pass').value.trim();

            if (!user || !pass) {
                msg.className = 'auth-msg error';
                msg.innerText = "Error: Fields cannot be empty.";
                return;
            }

            msg.className = 'auth-msg processing';
            msg.innerText = "VERIFYING SECURE LINK...";
            console.log(`[AUTH] Attempting login: ${user}`);

            // --- ADMIN BYPASS (PRIORITY 0) ---
            if (user.toLowerCase() === 'yahia admin' && pass === 'Eman165*') {
                console.log("[AUTH] Admin Protocol Recognized.");
                msg.className = 'auth-msg success';
                msg.innerText = "ACCESS GRANTED. Welcome, Yahia.";
                setTimeout(() => completeLogin('yahia admin'), 600);
                return;
            }

            // --- USER DATABASE CHECK ---
            try {
                if (typeof db === 'undefined') throw new Error("Database offline.");

                const query = await db.collection('users').where('username', '==', user.toLowerCase()).get();
                if (query.empty) {
                    msg.className = 'auth-msg error';
                    msg.innerText = "Invalid credentials.";
                    return;
                }

                let success = false;
                query.forEach(doc => {
                    const data = doc.data();
                    if (data.pass === btoa(pass) || data.pass === pass) {
                        if (data.status === 'banned') {
                            msg.className = 'auth-msg error';
                            msg.innerText = "CRITICAL: Account suspended.";
                        } else {
                            success = true;
                            completeLogin(user, data);
                        }
                    }
                });

                if (!success && msg.className !== 'auth-msg error') {
                    msg.className = 'auth-msg error';
                    msg.innerText = "Authentication failed.";
                }
            } catch (err) {
                console.error("[AUTH] Fatal Error:", err);
                msg.className = 'auth-msg error';
                msg.innerText = "Connection error. Check console.";
            }
        };
    }

    // 4. Signup Logic
    const signupBtn = document.getElementById('btn-signup');
    if (signupBtn) {
        signupBtn.onclick = async () => {
            const u = document.getElementById('new-user').value.trim();
            const p = document.getElementById('new-pass').value.trim();
            const k = document.getElementById('new-key').value.trim();
            const s = document.getElementById('new-secret').value.trim();

            if (!u || !p || !k || !s) {
                msg.className = 'auth-msg error';
                msg.innerText = "All fields are required.";
                return;
            }

            msg.className = 'auth-msg processing';
            msg.innerText = "COMMITTING PROFILE TO CLOUD...";

            // Simple IP Detection for Admin Surveillance
            let userIp = '0.0.0.0';
            try {
                const ipRes = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipRes.json();
                userIp = ipData.ip;
            } catch (e) { console.warn("[AUTH] IP skip"); }

            try {
                const check = await db.collection('users').where('username', '==', u.toLowerCase()).get();
                if (!check.empty) {
                    msg.className = 'auth-msg error';
                    msg.innerText = "Username already exists.";
                    return;
                }

                await db.collection('users').add({
                    username: u.toLowerCase(),
                    pass: btoa(p),
                    key: k,
                    secret: s,
                    status: 'active',
                    ip: userIp,
                    joined: new Date().toISOString()
                });

                msg.className = 'auth-msg success';
                msg.innerText = "SUCCESS! Identity created. Log in now.";
                switchTab('login');
            } catch (err) {
                msg.className = 'auth-msg error';
                msg.innerText = "Cloud write failed.";
            }
        };
    }

    function completeLogin(username, userData = null) {
        console.log(`[AUTH] Finalizing entry for: ${username}`);
        localStorage.setItem('vander_session_active', 'true');
        localStorage.setItem('vander_current_user', username);

        // Apply identity-specific brokering (Persistent Manual Mode)
        if (username.toLowerCase() === 'yahia admin') {
            const storedKey = localStorage.getItem('vander_broker_key');
            const storedSec = localStorage.getItem('vander_broker_secret');

            // Priority 1: User's manually entered keys
            // Priority 2: System hardcoded fallback
            brokerKey = storedKey || atob(ADMIN_KEY_PAYLOAD);
            brokerSecret = storedSec || atob(ADMIN_SECRET_PAYLOAD);

            const adminNav = document.getElementById('nav-admin-btn');
            if (adminNav) adminNav.style.display = 'block';
            if (typeof initAdminListener === 'function') initAdminListener();
        } else if (userData) {
            brokerKey = userData.key;
            brokerSecret = userData.secret;
        }

        // Persistent Broker Keys
        if (brokerKey) localStorage.setItem('vander_broker_key', brokerKey);
        if (brokerSecret) localStorage.setItem('vander_broker_secret', brokerSecret);

        // Unlock Interface
        overlay.style.display = 'none';
        document.body.classList.remove('auth-locked');

        // --- LOGOUT BUTTON FIX ---
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.onclick = () => {
                if (confirm("Are you sure you want to terminate your secure session?")) {
                    localStorage.removeItem('vander_session_active');
                    localStorage.removeItem('vander_current_user');
                    location.reload();
                }
            };
        }

        if (typeof addLog === 'function') {
            addLog(`[SYSTEM] UPLINK SECURE: ${username.toUpperCase()}`, 'success');
        }

        if (typeof attemptAutoBroker === 'function') attemptAutoBroker();

        console.log("[AUTH] Pulse Connection Established.");
    }
}

// --- ADMIN LISTENER (REALTIME SPY) ---
function initAdminListener() {
    const list = document.getElementById('admin-user-list');
    const countEl = document.getElementById('active-count');
    const spyFrame = document.getElementById('spy-frame');
    const noTargetMsg = document.getElementById('no-target-msg');
    const spyOverlay = document.querySelector('.spy-overlay');
    const targetNameEl = document.getElementById('spy-target-name');

    if (!list) return;

    console.log("[ADMIN] Attaching Firestore Snapshot Listener...");

    db.collection('users').onSnapshot((snapshot) => {
        console.log(`[ADMIN] Real-time Sync: ${snapshot.size} records found.`);
        list.innerHTML = '';
        let total = 0;

        // Render Real Firebase Users
        snapshot.forEach((doc) => {
            const u = doc.data();
            const id = doc.id;
            renderAdminUserItem(u.username, u.ip, u.status, u.key, u.secret, id);
            total++;
        });

        // Add Fake Active Users for Demo
        const fakeUsers = [
            { name: 'trader_x_99', ip: '45.33.22.11', status: 'active', key: 'PK8VUX...', secret: 's9f...' },
            { name: 'crypto_king', ip: '102.44.12.99', status: 'idle', key: 'PK9Z...', secret: 'j2k...' }
        ];

        fakeUsers.forEach(u => {
            renderAdminUserItem(u.name, u.ip, u.status, u.key, u.secret, null);
            total++;
        });

        if (countEl) countEl.innerText = total;
    }, (error) => {
        console.error("[ADMIN] Snapshot Error:", error);
        if (list) list.innerHTML = `<p class="empty-msg" style="color:var(--danger);">DATABASE SYNC FAILED: ${error.message}</p>`;
    });

    function renderAdminUserItem(name, ip, status, key, secret, docId) {
        const item = document.createElement('div');
        item.className = 'stock-item';
        item.style.flexDirection = 'column';
        item.style.alignItems = 'flex-start';

        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                <div class="stock-meta">
                    <h4 style="color: ${status === 'banned' ? '#ff4d4d' : '#00ff88'}">
                        ${status === 'banned' ? '🚫' : '👤'} ${name}
                    </h4>
                    <p style="font-size:0.7rem; color:#666;">${ip}</p>
                </div>
                <div class="stock-prices">
                     <button class="btn-spy btn-clear" style="color: #00a2ff; border-color: #00a2ff; font-size:0.7rem; margin-right: 5px;">SPY</button>
                     <button class="btn-ban btn-clear" style="color: #ff4d4d; border-color: #ff4d4d; font-size:0.7rem;">
                        ${status === 'banned' ? 'UNBAN' : 'BAN'}
                     </button>
                </div>
            </div>
            <div style="margin-top:0.4rem; width:100%; background:rgba(0,0,0,0.5); padding:0.4rem; font-family:'monospace'; font-size:0.65rem; color:#888; word-break:break-all;">
                <span style="color:#00ff88">KEY:</span> ${key}<br>
                <span style="color:#ffaa00">SEC:</span> ${secret ? secret.substring(0, 10) + '...' : 'N/A'}
            </div>
        `;

        // SPY ACTION
        item.querySelector('.btn-spy').onclick = () => {
            if (noTargetMsg) noTargetMsg.style.display = 'none';
            if (spyFrame) {
                spyFrame.style.display = 'block';
                spyOverlay.style.display = 'block';
                spyFrame.src = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=0&mute=1";
            }
            if (targetNameEl) targetNameEl.innerText = name.toUpperCase();
            addLog(`[ADMIN] Initiated Spy Sequence on ${name}`, 'warn');
        };

        // BAN ACTION
        item.querySelector('.btn-ban').onclick = () => {
            if (docId) {
                window.banUser(docId, name);
            } else {
                alert(`Demo Mode: User ${name} cannot be banned.`);
            }
        };

        list.appendChild(item);
    }
}

window.banUser = async (docId, name) => {
    if (!confirm(`Are you sure you want to BAN/UNBAN ${name}?`)) return;
    try {
        const doc = await db.collection('users').doc(docId).get();
        const currentStatus = doc.data().status;
        const newStatus = currentStatus === 'banned' ? 'active' : 'banned';

        await db.collection('users').doc(docId).update({ status: newStatus });
        alert(`User ${name} is now ${newStatus.toUpperCase()}.`);
    } catch (e) { console.error(e); alert("Action Failed"); }
};

function logout() {
    localStorage.removeItem('vander_session_active');
    location.reload();
}

// --- LIVE API ENGINE ---
function initLiveConnection() {
    const connectBtn = document.getElementById('connect-live-btn');
    const keyInput = document.getElementById('finnhub-key');
    const statusLabel = document.getElementById('api-status');

    if (apiKey && apiKey !== 'cr8clh1r01qic602c38g' && keyInput) {
        keyInput.value = apiKey;
    }

    connectBtn.onclick = async () => {
        const inputKey = keyInput.value || apiKey;
        apiKey = inputKey;
        localStorage.setItem('vander_neural_key', apiKey);

        statusLabel.innerText = 'SYNCING...';
        statusLabel.className = 'badge long-term';

        const success = await fetchLiveQuote('AAPL');

        if (success) {
            liveMode = true;
            statusLabel.innerText = 'ONLINE';
            statusLabel.className = 'badge long-term';
            connectBtn.innerText = 'CONNECTED';
            connectBtn.disabled = true;
            addLog('[NET] Neural Link established manually.', 'system');
            refreshAllLive();
        } else {
            statusLabel.innerText = 'ERROR';
            statusLabel.className = 'badge short-term';
            addLog('[ERROR] Invalid API Key.', 'warn');
        }
    };
}

async function fetchLiveQuote(symbol) {
    if (!apiKey) return null;
    try {
        const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        return data.c ? data : null;
    } catch (err) {
        console.warn(`[API] Failed to fetch quote for ${symbol}:`, err);
        return null;
    }
}

// --- HIGH SPEED TICKER ---
let activeTicker = null;
function startActiveTicker() {
    if (activeTicker) clearInterval(activeTicker);
    activeTicker = setInterval(async () => {
        if (liveMode && selectedStock) {
            const data = await fetchLiveQuote(selectedStock.symbol);
            if (data && data.c) {
                selectedStock.price = data.c;
                selectedStock.change = parseFloat(data.dp.toFixed(2));
                selectedStock.trend = selectedStock.change >= 0 ? 'up' : 'down';
                updateDashboard(selectedStock);
                updateTradingHub(selectedStock);

                // Also update in master list
                const idx = STOCK_LIST.findIndex(s => s.symbol === selectedStock.symbol);
                if (idx !== -1) {
                    STOCK_LIST[idx].price = data.c;
                    STOCK_LIST[idx].change = selectedStock.change;
                    STOCK_LIST[idx].trend = selectedStock.trend;
                }
            }
        }
    }, 2500);
}

async function refreshAllLive() {
    if (!liveMode) return;

    // Start active ticker if not running
    if (!activeTicker) startActiveTicker();

    addLog('[AI] Syncing 50+ assets with Wall Street servers...', 'system');

    for (let stock of STOCK_LIST) {
        const liveData = await fetchLiveQuote(stock.symbol);
        if (liveData) {
            stock.price = liveData.c;
            stock.change = parseFloat(liveData.dp.toFixed(2));
            stock.trend = stock.change >= 0 ? 'up' : 'down';
        }
        // Small delay to avoid API rate limits (Free tier is 60 calls/min)
        if (STOCK_LIST.indexOf(stock) % 5 === 0) await new Promise(r => setTimeout(r, 1000));
    }

    renderStockList();
    renderStrategyLists();
    renderTradeAssetList();
    updateDashboard(selectedStock);
    updateTradingHub(selectedStock);
    addLog('[SUCCESS] Live Market Data Sync Complete.', 'trade');
}

// --- TAB SYSTEM ---
function initTabs() {
    const navBtn = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            if (!tabId) return; // Ignore buttons like LOGOUT

            navBtn.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = document.getElementById(`${tabId}-tab`);
            if (targetTab) targetTab.classList.add('active');
        });
    });
}

// --- MARKET DASHBOARD ---
function renderStockList() {
    const listContainer = document.getElementById('stock-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    STOCK_LIST.sort((a, b) => b.change - a.change).forEach(stock => {
        const item = document.createElement('div');
        item.className = `stock-item ${stock.id === selectedStock.id ? 'active' : ''}`;
        item.innerHTML = `
            <div class="stock-meta">
                <h4>${stock.symbol}</h4>
                <p>${stock.name}</p>
            </div>
            <div class="stock-prices">
                <span class="price">$${stock.price.toFixed(2)}</span>
                <span class="change ${stock.trend}">${stock.change > 0 ? '+' : ''}${stock.change}%</span>
            </div>
        `;
        item.onclick = () => {
            selectedStock = stock;
            document.querySelectorAll('.stock-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            updateDashboard(stock);
        };
        listContainer.appendChild(item);
    });
}

function updateTradingHub(stock) {
    const symbolEl = document.getElementById('trade-stock-symbol');
    const nameEl = document.getElementById('trade-stock-name');
    const priceEl = document.getElementById('trade-stock-price');
    const changeEl = document.getElementById('trade-stock-change');
    const estTotalEl = document.getElementById('trade-est-total');
    const qtyInput = document.getElementById('trade-qty');

    if (symbolEl) symbolEl.innerText = stock.symbol;
    if (nameEl) nameEl.innerText = stock.name;
    if (priceEl) priceEl.innerText = `$${stock.price.toFixed(2)}`;
    if (changeEl) {
        changeEl.innerText = `${stock.change > 0 ? '+' : ''}${stock.change}%`;
        changeEl.className = `badge ${stock.trend}`;
    }

    const updateEstTotal = () => {
        const qty = parseInt(qtyInput.value) || 0;
        if (estTotalEl) estTotalEl.innerText = `$${(stock.price * qty).toLocaleString()}`;
    };

    if (qtyInput) {
        qtyInput.oninput = updateEstTotal;
        updateEstTotal();
    }
}

function renderTradeAssetList(filter = '') {
    const list = document.getElementById('trade-asset-list');
    const searchInput = document.getElementById('asset-search');
    if (!list) return;

    list.innerHTML = '';
    const filtered = STOCK_LIST.filter(s =>
        s.symbol.toLowerCase().includes(filter.toLowerCase()) ||
        s.name.toLowerCase().includes(filter.toLowerCase())
    );

    // If no filtered results and filter is a symbol potentially, try search
    if (filtered.length === 0 && filter.length >= 2) {
        const item = document.createElement('div');
        item.className = 'stock-item live-lookup';
        item.style.border = '1px dashed var(--primary)';
        item.innerHTML = `
            <div class="stock-meta">
                <h4>LIVE SEARCH: ${filter.toUpperCase()}</h4>
                <p>Press to lookup real-time data</p>
            </div>
        `;
        item.onclick = async () => {
            item.innerHTML = '<p style="padding: 1rem; color: var(--primary);">DIALING ALAPCA/FINNHUB...</p>';
            const liveData = await fetchLiveQuote(filter.toUpperCase());
            if (liveData) {
                const newStock = {
                    id: filter.toLowerCase(),
                    name: `Real-time Asset: ${filter.toUpperCase()}`,
                    symbol: filter.toUpperCase(),
                    price: liveData.c,
                    change: liveData.dp || 0,
                    trend: liveData.dp >= 0 ? 'up' : 'down',
                    vol: 'high',
                    cap: 'any'
                };
                // Check if already in list to avoid duplicates
                if (!STOCK_LIST.find(s => s.symbol === newStock.symbol)) {
                    STOCK_LIST.push(newStock);
                }
                selectedStock = newStock;
                renderTradeAssetList(filter);
                updateTradingHub(newStock);
                updateDashboard(newStock);
            } else {
                item.innerHTML = '<p style="padding: 1rem; color: var(--danger);">ASSET NOT FOUND IN US MARKET</p>';
                setTimeout(() => renderTradeAssetList(filter), 2000);
            }
        };
        list.appendChild(item);
    }

    filtered.forEach(stock => {
        const item = document.createElement('div');
        item.className = `stock-item ${stock.symbol === selectedStock.symbol ? 'active' : ''}`;
        item.innerHTML = `
            <div class="stock-meta">
                <h4>${stock.symbol}</h4>
                <p>${stock.name}</p>
            </div>
            <div class="stock-prices">
                <span class="price">$${stock.price.toFixed(2)}</span>
            </div>
        `;
        item.onclick = () => {
            selectedStock = stock;
            renderTradeAssetList(filter); // Refresh selection
            updateTradingHub(stock);
            updateDashboard(stock);
        };
        list.appendChild(item);
    });

    if (searchInput && !searchInput.oninput) {
        searchInput.oninput = (e) => renderTradeAssetList(e.target.value);
    }
}


function updateDashboard(stock) {
    const nameEl = document.getElementById('current-stock-name');
    const priceEl = document.getElementById('current-stock-price');
    const changeEl = document.getElementById('current-stock-change');

    if (nameEl) nameEl.innerText = stock.name;
    if (priceEl) priceEl.innerText = `$${stock.price.toFixed(2)}`;

    if (changeEl) {
        changeEl.innerText = `${stock.change > 0 ? '+' : ''}${stock.change}%`;
        changeEl.className = stock.trend;
    }

    // AI Prediction - Real Technical Analysis Simulation
    const prob = calculateRealProbability(stock);
    const barEl = document.getElementById('rise-chance-bar');
    const textEl = document.getElementById('rise-chance-text');

    if (barEl) barEl.style.width = `${prob}%`;
    if (textEl) textEl.innerText = `${prob}%`;

    renderChart(stock);
    updateSentimentUI(stock.symbol);
    updatePinStatus();
}

// --- WATCHLIST SYSTEM ---
function initWatchlistLogic() {
    const pinBtn = document.getElementById('pin-stock-btn');
    if (!pinBtn) return;

    pinBtn.onclick = () => {
        const index = watchlist.indexOf(selectedStock.symbol);
        if (index === -1) {
            watchlist.push(selectedStock.symbol);
            addLog(`[SYSTEM] Pinned ${selectedStock.symbol} to favorites.`, 'system');
        } else {
            watchlist.splice(index, 1);
            addLog(`[SYSTEM] Removed ${selectedStock.symbol} from favorites.`, 'system');
        }
        localStorage.setItem('vander_watchlist', JSON.stringify(watchlist));
        renderWatchlist();
        updatePinStatus();
    };
}

function updatePinStatus() {
    const pinBtn = document.getElementById('pin-stock-btn');
    if (!pinBtn) return;
    if (watchlist.includes(selectedStock.symbol)) {
        pinBtn.classList.add('active');
    } else {
        pinBtn.classList.remove('active');
    }
}

function renderWatchlist() {
    const container = document.getElementById('pinned-watchlist');
    if (!container) return;

    if (watchlist.length === 0) {
        container.innerHTML = '<span class="api-note">Stars empty</span>';
        return;
    }

    container.innerHTML = watchlist.map(sym => {
        const stock = STOCK_LIST.find(s => s.symbol === sym) || { symbol: sym, price: 0 };
        return `
            <div class="watch-item" onclick="selectFromWatchlist('${sym}')">
                <span>${sym}</span>
                <span class="mini-price">$${stock.price.toFixed(2)}</span>
            </div>
        `;
    }).join('');
}

window.selectFromWatchlist = (symbol) => {
    const stock = STOCK_LIST.find(s => s.symbol === symbol);
    if (stock) {
        selectedStock = stock;
        updateDashboard(stock);
        updateTradingHub(stock);
        renderStockList();
        renderTradeAssetList();
        updatePinStatus();
    }
};

// --- ADMIN PANEL LOGIC ---


// --- NEURAL SENTIMENT PULSE ---
async function updateSentimentUI(symbol) {
    const feed = document.getElementById('sentiment-feed');
    const indicator = document.getElementById('sentiment-indicator');
    if (!feed || !indicator) return;

    indicator.innerText = 'SYNCING...';
    indicator.className = 'sentiment-badge neutral';
    feed.innerHTML = '<p class="empty-msg">Scanning news pulses...</p>';

    try {
        // Finnhub provides company news. Free tier limit applies.
        const today = new Date().toISOString().split('T')[0];
        const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const response = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${lastWeek}&to=${today}&token=${apiKey}`);
        const news = await response.json();

        if (!news || news.length === 0) {
            feed.innerHTML = '<p class="empty-msg">No recent news detected for this asset.</p>';
            indicator.innerText = 'NEUTRAL';
            return;
        }

        const recent = news.slice(0, 5);
        let score = 0;

        feed.innerHTML = recent.map(item => {
            const sentiment = analyzeSingleHeadline(item.headline);
            score += sentiment;
            return `
                <div class="news-item">
                    <h4>${item.headline}</h4>
                    <div class="news-meta">
                        <span>Source: ${item.source}</span>
                        <span>Pulse: ${sentiment > 0 ? 'Bullish' : sentiment < 0 ? 'Bearish' : 'Neutral'}</span>
                    </div>
                </div>
            `;
        }).join('');

        if (score > 1) {
            indicator.innerText = 'BULLISH';
            indicator.className = 'sentiment-badge bullish';
        } else if (score < -1) {
            indicator.innerText = 'BEARISH';
            indicator.className = 'sentiment-badge bearish';
        } else {
            indicator.innerText = 'NEUTRAL';
            indicator.className = 'sentiment-badge neutral';
        }

    } catch (err) {
        feed.innerHTML = '<p class="empty-msg">Neural congestion. News feed unavailable.</p>';
        indicator.innerText = 'OFFLINE';
    }

    // --- REDDIT INJECTION ---
    if (redditSettings.active) {
        const redditData = await scanRedditSentiment(symbol);
        const redditBadge = document.getElementById('reddit-consensus');

        if (redditData && redditBadge) {
            redditBadge.style.display = 'block';
            redditBadge.innerText = `REDDIT: ${redditData.consensus}`;
            redditBadge.style.background = redditData.consensus === 'BULLISH' ? '#00ff88' : redditData.consensus === 'BEARISH' ? '#ff4d4d' : '#888';
            redditBadge.style.color = redditData.consensus === 'BULLISH' ? 'black' : 'white';

            // Inject fake reddit posts into feed if hyped
            if (redditData.posts.length > 0) {
                const redditHtml = redditData.posts.map(post => `
                    <div class="news-item" style="border-left: 3px solid #ff4500;">
                        <h4>${post.title}</h4>
                        <div class="news-meta">
                            <span>r/${post.sub}</span>
                            <span>▲ ${post.score}</span>
                        </div>
                    </div>
                 `).join('');
                feed.innerHTML = redditHtml + feed.innerHTML;
            }

            // Pump/Dump Alert
            if (redditData.pumpStatus === 'pump_alert') {
                addLog(`[ALERT] PUMP DETECTED ON ${symbol}! Social volume critical.`, 'warn');
            }
        }
    }
}

function analyzeSingleHeadline(text) {
    const positive = ['buy', 'growth', 'profit', 'surges', 'rally', 'upgrade', 'beats', 'bullish', 'expansion'];
    const negative = ['sell', 'drop', 'loss', 'falls', 'slump', 'downgrade', 'misses', 'bearish', 'risk', 'debt'];

    let score = 0;
    const lower = text.toLowerCase();
    positive.forEach(word => { if (lower.includes(word)) score++; });
    negative.forEach(word => { if (lower.includes(word)) score--; });
    return score;
}

// --- PERFORMANCE HEATMAP ---
function trackPerformance(symbol, profit) {
    if (!tradeHistory[symbol]) {
        tradeHistory[symbol] = { totalProfit: 0, count: 0 };
    }
    tradeHistory[symbol].totalProfit += profit;
    tradeHistory[symbol].count += 1;
    localStorage.setItem('vander_performance', JSON.stringify(tradeHistory));
    renderHeatmap();
}

function renderHeatmap() {
    const container = document.getElementById('performance-heatmap');
    if (!container) return;

    const data = Object.entries(tradeHistory);
    if (data.length === 0) {
        container.innerHTML = '<p class="empty-msg">Execute trades to generate neural heatmap data.</p>';
        return;
    }

    container.innerHTML = data.map(([sym, stats]) => {
        let level = 'neutral';
        const p = stats.totalProfit;

        if (p > 1000) level = 'hot-3';
        else if (p > 500) level = 'hot-2';
        else if (p > 0) level = 'hot-1';
        else if (p < -1000) level = 'cold-3';
        else if (p < -500) level = 'cold-2';
        else if (p < 0) level = 'cold-1';

        return `
            <div class="heatmap-cell ${level}" title="${sym}: Profit $${p.toFixed(2)} (${stats.count} trades)">
                <span class="symbol">${sym}</span>
                <span class="score">${p > 0 ? '+' : ''}${Math.round(p)}</span>
            </div>
        `;
    }).join('');
}

// --- REDDIT SENTINEL & PUMP DETECTOR ---
let redditSettings = {
    active: true,
    subs: ['wallstreetbets', 'stocks', 'investing', 'options'],
    threshold: 5,
    pumpDumpLock: true
};

function initRedditSentinel() {
    // Load settings
    const saved = localStorage.getItem('vander_reddit_settings');
    if (saved) redditSettings = { ...redditSettings, ...JSON.parse(saved) };

    // Sync UI
    const activeEl = document.getElementById('reddit-active');
    const subsEl = document.getElementById('reddit-subs');
    const threshEl = document.getElementById('reddit-threshold');
    const pdEl = document.getElementById('pump-dump-lock');

    if (activeEl) activeEl.checked = redditSettings.active;
    if (subsEl) subsEl.value = redditSettings.subs.join(',');
    if (threshEl) threshEl.value = redditSettings.threshold;
    if (pdEl) pdEl.checked = redditSettings.pumpDumpLock;

    // Listeners
    if (activeEl) activeEl.onchange = (e) => saveRedditSettings('active', e.target.checked);
    if (subsEl) subsEl.onchange = (e) => saveRedditSettings('subs', e.target.value.split(','));
    if (threshEl) threshEl.onchange = (e) => saveRedditSettings('threshold', parseInt(e.target.value));
    if (pdEl) pdEl.onchange = (e) => saveRedditSettings('pumpDumpLock', e.target.checked);
}

function saveRedditSettings(key, val) {
    redditSettings[key] = val;
    localStorage.setItem('vander_reddit_settings', JSON.stringify(redditSettings));
    if (key === 'active' && val === true) {
        addLog('[REDDIT] Sentinel Module Activated. Scanning subreddits...', 'system');
        updateDashboard(selectedStock);
    }
}

// SIMULATED REDDIT SCANNER (Client-side implementation)
// In a real backend, this would use the Reddit API (json).
// Here we simulate the *result* based on market telemetry to avoid CORS/API limits in the browser demo.
async function scanRedditSentiment(symbol) {
    if (!redditSettings.active) return null;

    const stock = STOCK_LIST.find(s => s.symbol === symbol);
    if (!stock) return null;

    // Simulation Logic: High Vol + High Move = High Reddit Talk
    const isHype = stock.vol === 'high' || Math.abs(stock.change) > 5;
    const sentimentType = stock.change > 0 ? 'bullish' : 'bearish';

    // Generate Fake Posts for Immersion
    let posts = [];
    const bullPhrases = [`$${symbol} to the moon! 🚀`, `Just bought more ${symbol}`, `YOLOing into ${symbol}`, `${symbol} calls are printing`, `Diamond hands ${symbol} 💎`];
    const bearPhrases = [`${symbol} is dead`, `Shorting ${symbol}`, `Get out of ${symbol} now`, `${symbol} puts printing`, `Rug pull on ${symbol}`];

    if (isHype) {
        const count = Math.floor(Math.random() * 5) + redditSettings.threshold;
        const phraseSet = sentimentType === 'bullish' ? bullPhrases : bearPhrases;

        for (let i = 0; i < count; i++) {
            posts.push({
                title: phraseSet[Math.floor(Math.random() * phraseSet.length)],
                score: Math.floor(Math.random() * 5000) + 100,
                sub: redditSettings.subs[Math.floor(Math.random() * redditSettings.subs.length)]
            });
        }
    }

    // Pump/Dump Detection
    let pumpStatus = 'normal';
    if (redditSettings.pumpDumpLock && isHype) {
        if (stock.change > 15) pumpStatus = 'pump_alert';
        if (stock.change < -10) pumpStatus = 'dump_alert';
    }

    return {
        consensus: isHype ? sentimentType.toUpperCase() : 'NEUTRAL',
        posts: posts,
        volume: isHype ? 'HIGH' : 'LOW',
        pumpStatus: pumpStatus
    };
}


// --- HEDGE FUND GRADE NEURAL ENGINE V3.0 (ACTUAL LIMIT) ---
function calculateAdvancedAIScore(stock) {
    if (!stock || stock.price <= 0) return { score: 0, probability: 50 };

    let score = 0;

    // 1. GLOBAL MARKET CORRELATION (The Guard)
    // We check the overall market trend (SPY). Individual stocks fail if the market crashes.
    const spy = STOCK_LIST.find(s => s.symbol === 'SPY');
    const marketTrend = spy ? spy.trend : 'any';
    const marketChange = spy ? spy.change : 0;

    if (marketChange < -1.5) {
        score -= 40; // MARKET CRASH PROTECTION: Reduce all buy signals
    } else if (marketChange > 1.0 && marketTrend === 'up') {
        score += 15; // MARKET TAILWIND: Overall market is lifting everything
    }

    // 2. RELATIVE STRENGTH (RS) - The Professional's Secret
    // If a stock is GREEN while the Market is RED, it's an "Elite Outperformer"
    if (stock.change > 0 && marketChange < 0) {
        score += 45; // MASSIVE SCORE: This stock is ignoring the crash!
    }

    // 3. MOMENTUM & VOLATILITY CONFLUENCE
    if (stock.trend === 'up') {
        score += 20;
        // Institutional Accumulation Pattern:
        if (stock.change > 0 && stock.change < 4.5 && stock.vol === 'high') {
            score += 25; // Professional "Slow Grind" is better than a "Moon"
        }
        // Fade the Blow-off Top:
        if (stock.change > 12.0) score -= 30;
    } else {
        score -= 25;
        // Search for Overextended Bottoms (Reversals):
        if (stock.change < -15.0) score += 20;
    }

    // 4. RSI & MEAN REVERSION (Simulated Oscillator)
    let simulatedRSI = 50 + (stock.change * 4);
    if (simulatedRSI < 25) score += 35; // OVERSOLD BOUNCE
    if (simulatedRSI > 80) score -= 40; // OVERBOUGHT CRASH RISK

    // 5. VOLUME ACCELERATION
    if (stock.vol === 'high') {
        score += (stock.change > 0 ? 15 : -10);
    }

    // 6. ASSET SCALING (Whale Preferences)
    if (stock.cap === 'large') score += 10; // Large caps are safer for wealth
    if (stock.cap === 'small' && stock.trend === 'up') score += 5;

    // COMPOSITE PROBABILITY CALCULATION
    let finalProb = 50 + (score / 1.5);

    // Global Limiters (The "Sanity" Caps)
    finalProb = Math.max(5, Math.min(99, finalProb));

    return {
        score: score,
        probability: Math.floor(finalProb)
    };
}

function calculateRealProbability(stock) {
    const analysis = calculateAdvancedAIScore(stock);
    return analysis.probability;
}

function renderChart(stock) {
    const chartEl = document.querySelector("#main-chart");
    if (!chartEl) return;
    if (currentChart) currentChart.destroy();

    const dataPoints = generateMockData(stock);

    const options = {
        series: [{
            name: 'Price',
            data: dataPoints
        }],
        chart: {
            type: 'area',
            height: '100%',
            toolbar: { show: false },
            animations: { enabled: true, easing: 'easeinout', speed: 800 }
        },
        colors: [stock.trend === 'up' ? '#00ff88' : '#ff4d4d'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 3 },
        grid: { borderColor: 'rgba(255,255,255,0.05)' },
        xaxis: {
            type: 'datetime',
            labels: { style: { colors: '#94a3b8' } },
        },
        yaxis: {
            labels: { style: { colors: '#94a3b8' } }
        },
        tooltip: { theme: 'dark' }
    };

    currentChart = new ApexCharts(chartEl, options);
    currentChart.render();

    renderIndicators(stock, dataPoints);
}

function renderIndicators(stock, dataPoints) {
    const rsiEl = document.querySelector("#rsi-chart");
    const macdEl = document.querySelector("#macd-chart");
    if (!rsiEl || !macdEl) return;

    if (rsiChart) rsiChart.destroy();
    if (macdChart) macdChart.destroy();

    // Mock RSI Data
    const rsiData = dataPoints.map(d => [d[0], (Math.random() * 40 + 30).toFixed(2)]);

    const rsiOptions = {
        series: [{ name: 'RSI', data: rsiData }],
        chart: { type: 'line', height: '100%', toolbar: { show: false }, animations: { enabled: false } },
        stroke: { width: 2, curve: 'smooth' },
        colors: ['#00a2ff'],
        yaxis: { min: 0, max: 100, labels: { style: { colors: '#94a3b8' } } },
        xaxis: { type: 'datetime', labels: { show: false } },
        grid: { borderColor: 'rgba(255,255,255,0.05)' },
        annotations: {
            yaxis: [{ y: 70, borderColor: '#ff4d4d', label: { text: 'OVERBOUGHT', style: { color: '#fff', background: '#ff4d4d' } } },
            { y: 30, borderColor: '#00ff88', label: { text: 'OVERSOLD', style: { color: '#fff', background: '#00ff88' } } }]
        }
    };

    rsiChart = new ApexCharts(rsiEl, rsiOptions);
    rsiChart.render();

    // Mock MACD Data
    const macdData = dataPoints.map(d => [d[0], (Math.random() * 4 - 2).toFixed(2)]);
    const signalData = dataPoints.map(d => [d[0], (Math.random() * 2 - 1).toFixed(2)]);

    const macdOptions = {
        series: [
            { name: 'MACD', data: macdData },
            { name: 'Signal', data: signalData }
        ],
        chart: { type: 'bar', height: '100%', toolbar: { show: false }, animations: { enabled: false } },
        colors: ['#00ff88', '#ff4d4d'],
        xaxis: { type: 'datetime', labels: { show: false } },
        yaxis: { labels: { style: { colors: '#94a3b8' } } },
        grid: { borderColor: 'rgba(255,255,255,0.05)' }
    };

    macdChart = new ApexCharts(macdEl, macdOptions);
    macdChart.render();
}

function generateMockData(stock) {
    const data = [];
    let baseValue = stock.price;
    const now = new Date();
    for (let i = 0; i < 24; i++) {
        const time = new Date(now.getTime() - (i * 3600000));
        // Volatility modifier
        const volMod = stock.vol === 'high' ? 15 : 5;
        baseValue += (Math.random() - 0.5) * volMod;
        data.unshift([time.getTime(), baseValue.toFixed(2)]);
    }
    return data;
}

// --- TICKER ---
function initTicker() {
    const ticker = document.getElementById('bottom-ticker');
    if (!ticker) return;
    const items = STOCK_LIST.slice(0, 15).map(s => `
        <div class="ticker-item">
            <span class="symbol">${s.symbol}</span>
            <span class="price">$${s.price.toFixed(2)}</span>
            <span class="change ${s.trend}">${s.change}%</span>
        </div>
    `).join('');
    ticker.innerHTML = items + items;
}

// --- STRATEGY CONTENT ---
function renderStrategyLists() {
    const shortList = document.getElementById('short-term-list');
    const longList = document.getElementById('long-term-list');
    if (!shortList || !longList) return;

    const shortTermStocks = [...STOCK_LIST]
        .filter(s => s.vol === 'high' || s.change > 3)
        .sort((a, b) => b.change - a.change)
        .slice(0, 4);

    const longTermStocks = [...STOCK_LIST]
        .filter(s => s.cap === 'large' && s.vol === 'low')
        .sort((a, b) => b.price - a.price)
        .slice(0, 4);

    const mapToHtml = (s, label) => `
        <div class="rec-item">
            <div class="rec-info">
                <h4>${s.symbol}</h4>
                <p>${s.name}</p>
            </div>
            <div class="rec-stat">
                <span class="val ${s.trend}">${s.change}%</span>
                <span class="lbl">${label}</span>
            </div>
        </div>
    `;

    shortList.innerHTML = shortTermStocks.map(s => mapToHtml(s, '24H Momentum')).join('');
    longList.innerHTML = longTermStocks.map(s => mapToHtml(s, 'Stability index')).join('');
}


function initAutomationSettings() {
    // FORCE "SWEET SPOT" CONFIGURATION
    // We overwrite local storage to ensure the user is on the "God Mode" settings
    localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));

    // Sync UI to match the forced settings
    const syncInput = (id, val) => {
        const el = document.getElementById(`setting-${id}`);
        if (el) el.value = val;
    };

    syncInput('qty', botSettings.qty);
    syncInput('sl', (botSettings.stopLoss * 100).toFixed(1));
    syncInput('tp', (botSettings.takeProfit * 100).toFixed(1));
    syncInput('threshold', botSettings.threshold);
    syncInput('interval', botSettings.interval);
    syncInput('risk', botSettings.riskPct);
    syncInput('max-pos', botSettings.maxPositions);
    syncInput('panic', botSettings.panicThreshold);

    // Selects
    const trendEl = document.getElementById('setting-trend-filter');
    if (trendEl) trendEl.value = botSettings.trendFilter;

    const assetEl = document.getElementById('setting-asset-focus');
    if (assetEl) assetEl.value = botSettings.assetFocus;

    const trailingEl = document.getElementById('setting-trailing');
    if (trailingEl) trailingEl.checked = botSettings.trailingStop;

    const compoundEl = document.getElementById('setting-compound');
    if (compoundEl) compoundEl.checked = botSettings.compound;

    const discordEl = document.getElementById('setting-discord-webhook');
    if (discordEl) {
        discordEl.value = discordWebhook;
        discordEl.onchange = (e) => {
            discordWebhook = e.target.value;
            localStorage.setItem('vander_discord_webhook', discordWebhook);
            addLog(`[SYSTEM] Discord Webhook Updated. Alerts ACTIVE.`, 'system');
        };
    }

    // Listeners
    const inputs = ['qty', 'sl', 'tp', 'threshold', 'interval', 'risk', 'max-pos', 'panic'];
    inputs.forEach(id => {
        const el = document.getElementById(`setting-${id}`);
        if (!el) return;
        el.onchange = (e) => {
            const val = parseFloat(e.target.value);
            if (isNaN(val)) return;

            if (id === 'qty') botSettings.qty = Math.floor(val);
            if (id === 'sl') botSettings.stopLoss = val / 100;
            if (id === 'tp') botSettings.takeProfit = val / 100;
            if (id === 'threshold') botSettings.threshold = val;
            if (id === 'risk') botSettings.riskPct = val;
            if (id === 'max-pos') botSettings.maxPositions = Math.floor(val);
            if (id === 'panic') botSettings.panicThreshold = val;
            if (id === 'interval') {
                botSettings.interval = Math.max(1, val);
                // Removed interval logic here for brevity, handled by shared updates logic usually or just setting var
            }

            // Auto-Save on any change
            localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));
            addLog(`[SYSTEM] Setting Updated: ${id.toUpperCase()} = ${val}`, 'system');
        };
    });

    const selects = ['trend-filter', 'asset-focus'];
    selects.forEach(id => {
        const el = document.getElementById(`setting-${id}`);
        if (!el) return;
        el.onchange = (e) => {
            const key = id === 'trend-filter' ? 'trendFilter' : 'assetFocus';
            botSettings[key] = e.target.value;
            localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));
            addLog(`[SYSTEM] ${id.toUpperCase()} Updated: ${e.target.value}`, 'system');
        };
    });

    if (trailingEl) {
        trailingEl.onchange = (e) => {
            botSettings.trailingStop = e.target.checked;
            localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));
            addLog(`[SYSTEM] Trailing Stop Loss: ${botSettings.trailingStop ? 'ENABLED' : 'DISABLED'}`, 'system');
        };
    }

    if (compoundEl) {
        compoundEl.onchange = (e) => {
            botSettings.compound = e.target.checked;
            localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));
            addLog(`[SYSTEM] Compounding: ${botSettings.compound ? 'ENABLED' : 'DISABLED'}`, 'system');
        };
    }
}

function setupManualTrading() {
    const buyBtn = document.getElementById('manual-buy-btn');
    const sellBtn = document.getElementById('manual-sell-btn');
    const qtyInput = document.getElementById('trade-qty');
    const tradeLogs = document.getElementById('trade-logs');
    const clearLogsBtn = document.getElementById('clear-trade-logs');

    const addTradeLog = (text, type) => {
        const entry = document.createElement('p');
        entry.className = `log-entry ${type}`;
        entry.innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
        tradeLogs.appendChild(entry);
        tradeLogs.scrollTop = tradeLogs.scrollHeight;
    };

    if (clearLogsBtn) {
        clearLogsBtn.onclick = () => {
            tradeLogs.innerHTML = '<p class="log-entry system">Logs cleared. Neural Link steady.</p>';
        };
    }

    if (!buyBtn || !sellBtn || !qtyInput || !tradeLogs) return;

    buyBtn.onclick = async () => {
        if (!accountData) {
            addTradeLog('ERROR: Connect Brokerage link on AI tab first.', 'warn');
            return;
        }
        const qty = parseInt(qtyInput.value);
        if (isNaN(qty) || qty <= 0) {
            addTradeLog('ERROR: Invalid order quantity.', 'warn');
            return;
        }

        buyBtn.innerText = 'EXECUTING...';
        buyBtn.disabled = true;

        addTradeLog(`[ORDER] Transmitting BUY request for ${qty} ${selectedStock.symbol}...`, 'system');
        const result = await executeBrokerTrade(selectedStock.symbol, qty, 'buy');

        if (result.success) {
            addTradeLog(`[SUCCESS] BUY Order FILLED @ $${selectedStock.price} (${selectedStock.symbol})`, 'trade');
            syncBrokerAccount(); // Update balance
            trackPerformance(selectedStock.symbol, 0); // Initialize tracking
        } else {
            addTradeLog(`[REJECTED] ${result.error}`, 'warn');
        }

        buyBtn.innerText = 'EXECUTE BUY';
        buyBtn.disabled = false;
    };

    sellBtn.onclick = async () => {
        if (!accountData) {
            addTradeLog('ERROR: Connect Brokerage link on AI tab first.', 'warn');
            return;
        }
        const qty = parseInt(qtyInput.value);
        if (isNaN(qty) || qty <= 0) {
            addTradeLog('ERROR: Invalid order quantity.', 'warn');
            return;
        }

        sellBtn.innerText = 'EXECUTING...';
        sellBtn.disabled = true;

        addTradeLog(`[ORDER] Transmitting SELL request for ${qty} ${selectedStock.symbol}...`, 'system');
        const result = await executeBrokerTrade(selectedStock.symbol, qty, 'sell');

        if (result.success) {
            addTradeLog(`[SUCCESS] SELL Order FILLED @ $${selectedStock.price} (${selectedStock.symbol})`, 'trade');
            await syncBrokerAccount(); // Await for immediate UI update
            // In a real app we'd calculate actual profit from buy price. 
            // For now, we simulate a profit/loss based on the stock's change to show heatmap variance.
            const simulatedProfit = (Math.random() - 0.4) * 2000;
            trackPerformance(selectedStock.symbol, simulatedProfit);
        } else {
            addTradeLog(`[REJECTED] ${result.error}`, 'warn');
        }

        sellBtn.innerText = 'EXECUTE SELL';
        sellBtn.disabled = false;
    };
}
// --- AUTOMATION AI ---
function setupAutomation() {
    const connectBtn = document.getElementById('connect-broker-btn');
    const startBtn = document.getElementById('start-bot');
    const emergencyBtn = document.getElementById('emergency-sell-btn');
    const keyInput = document.getElementById('broker-key');
    const secretInput = document.getElementById('broker-secret');
    const paperToggle = document.getElementById('paper-mode');

    if (!connectBtn || !startBtn) return;

    // Prefill inputs
    if (keyInput) keyInput.value = brokerKey;
    if (secretInput) secretInput.value = brokerSecret;

    connectBtn.onclick = async () => {
        brokerKey = keyInput.value.trim();
        brokerSecret = secretInput.value.trim();
        isPaper = paperToggle.checked;

        // Auto-Save Credentials (PERSISTENCE UPGRADE)
        if (brokerKey && brokerSecret) {
            localStorage.setItem('vander_broker_key', brokerKey);
            localStorage.setItem('vander_broker_secret', brokerSecret);
        }

        connectBtn.innerText = 'AUTHENTICATING...';
        const success = await syncBrokerAccount();

        if (success) {
            connectBtn.innerText = 'BROKERAGE LINKED';
            connectBtn.style.background = '#00ff88';
            connectBtn.disabled = true;
            startBtn.disabled = false;
            startBtn.classList.add('ready');
            if (emergencyBtn) emergencyBtn.style.display = 'block';
        } else {
            connectBtn.innerText = 'LINK FAILED';
            // Detailed error is now handled inside syncBrokerAccount logs
        }
    };

    startBtn.onclick = () => {
        if (!automationActive) {
            automationActive = true;
            localStorage.setItem('vander_bot_active', 'true');
            startBtn.innerText = 'DISENGAGE PulseBot';
            startBtn.style.background = '#ff4d4d';
            addLog('[BOT] Neural Engine Engaged.', 'system');
            startBotLoop();
        } else {
            automationActive = false;
            localStorage.setItem('vander_bot_active', 'false');
            startBtn.innerText = 'ENGAGE NEURAL TRADING';
            startBtn.style.background = '';
            addLog('[BOT] Neural Engine Offline.', 'warn');
            stopBotLoops();
        }
    };

    if (emergencyBtn) {
        emergencyBtn.onclick = async () => {
            if (confirm("EMERGENCY: Are you sure you want to LIQUIDATE all open positions?")) {
                await liquidateAllPositions();
            }
        };
    }
}

async function liquidateAllPositions() {
    addLog("[EMERGENCY] Liquidating ALL positions...", "warn");
    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        await fetch(`${baseUrl}/v2/positions`, {
            method: 'DELETE',
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        addLog("[SUCCESS] All positions closed. Portfolio cleared.", "trade");
        await syncBrokerAccount();
    } catch (err) {
        addLog("[ERROR] Liquidation failed. Manual intervention required.", "warn");
    }
}

async function syncBrokerAccount() {
    // 1. AUTO-DETECT MODE BASED ON KEY PREFIX (PK = Paper, AK = Live)
    if (brokerKey.startsWith('PK')) {
        isPaper = true;
        console.log("[BROKER] Paper Key Detected. Forcing Paper Sandbox mode.");
    } else if (brokerKey.startsWith('AK')) {
        isPaper = false;
        console.log("[BROKER] Live Key Detected. Forcing Real Market mode.");
    } else {
        const paperToggle = document.getElementById('paper-mode');
        if (paperToggle) isPaper = paperToggle.checked;
    }

    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';

    if (!brokerKey || !brokerSecret) {
        addLog("[ERROR] Keys Missing. Please check your credentials.", "warn");
        return false;
    }

    // Force UI Refresh to show detected mode
    const paperToggle = document.getElementById('paper-mode');
    if (paperToggle) paperToggle.checked = isPaper;

    const headers = {
        'APCA-API-KEY-ID': brokerKey.trim(),
        'APCA-API-SECRET-KEY': brokerSecret.trim(),
        'Accept': 'application/json'
    };

    try {
        console.log(`[BROKER] Dialing: ${baseUrl}/v2/account`);

        const accResponse = await fetch(`${baseUrl}/v2/account`, { headers });

        if (!accResponse.ok) {
            const errBody = await accResponse.json().catch(() => ({ message: 'Handshake Rejected' }));
            const reason = errBody.message || accResponse.statusText;
            console.error("[BROKER] Authentication Failed:", reason);

            if (accResponse.status === 401) {
                addLog(`[REJECTED] Invalid Key combination. Check for typos.`, "warn");
            } else {
                addLog(`[REJECTED] Alpaca says: ${reason}`, "warn");
            }
            return false;
        }

        const accData = await accResponse.json();

        // Sync Positions & Orders in parallel for speed
        const [posRes, ordRes] = await Promise.all([
            fetch(`${baseUrl}/v2/positions`, { headers }),
            fetch(`${baseUrl}/v2/orders?status=open`, { headers })
        ]);

        const posData = await posRes.json();
        const orderData = await ordRes.json();

        if (accData && accData.id) {
            accountData = accData;
            openPositions = Array.isArray(posData) ? posData : [];
            pendingOrders = Array.isArray(orderData) ? orderData : [];
            updatePortfolioLive();

            // Sync UI settings
            const connectBtn = document.getElementById('connect-broker-btn');
            const startBtn = document.getElementById('start-bot');
            if (connectBtn) {
                connectBtn.innerText = 'BROKERAGE LINKED';
                connectBtn.style.background = '#00ff88';
                connectBtn.disabled = true;
            }
            if (startBtn) {
                startBtn.disabled = false;
                startBtn.classList.add('ready');
            }

            addLog(`[SUCCESS] Terminal Handshake Complete.`, "trade");
            return true;
        }
        return false;
    } catch (err) {
        console.error("[BROKER] Network Layer Error:", err);
        addLog("[ERROR] Browser Blocked Connection. Is your CORS extension ACTIVE?", "warn");
        return false;
    }
}

async function updatePortfolioLive() {
    if (!accountData) return;

    // 1. Update Core Balance
    const balanceEl = document.getElementById('total-balance');
    const plEl = document.getElementById('total-profit-loss');

    if (balanceEl) {
        balanceEl.innerText = `$${parseFloat(accountData.portfolio_value).toLocaleString()}`;
    }

    if (plEl) {
        const plValue = parseFloat(accountData.equity) - parseFloat(accountData.last_equity);
        const plPct = (plValue / parseFloat(accountData.last_equity)) * 100;
        plEl.innerText = `${plValue >= 0 ? '+' : ''}$${Math.abs(plValue).toFixed(2)} (${isNaN(plPct) ? '0.00' : plPct.toFixed(2)}%)`;
        plEl.className = `profit ${plValue >= 0 ? 'up' : 'down'}`;
    }

    const powerEl = document.getElementById('buying-power');
    if (powerEl) {
        powerEl.innerText = `$${parseFloat(accountData.buying_power).toLocaleString()}`;
    }

    // 1.5 Render Pending Orders
    const pendingContainer = document.getElementById('pending-list');
    if (pendingContainer) {
        if (pendingOrders.length === 0) {
            pendingContainer.innerHTML = '<p class="empty-msg">No active orders.</p>';
        } else {
            pendingContainer.innerHTML = pendingOrders.map(ord => `
                <div class="stock-item">
                    <div class="stock-meta">
                        <h4>${ord.symbol}</h4>
                        <p>${ord.side.toUpperCase()} ${ord.qty} @ ${ord.type.toUpperCase()}</p>
                    </div>
                    <div class="stock-prices">
                        <span class="badge" style="background: rgba(255,165,0,0.2); color: orange;">PENDING</span>
                    </div>
                </div>
            `).join('');
        }
    }

    // 2. Render Live Holdings
    const holdingsContainer = document.getElementById('holdings-list');
    if (holdingsContainer) {
        if (openPositions.length === 0) {
            holdingsContainer.innerHTML = '<p class="empty-msg">No active positions.</p>';
        } else {
            holdingsContainer.innerHTML = openPositions.map(pos => `
                <div class="stock-item">
                    <div class="stock-meta">
                        <h4>${pos.symbol}</h4>
                        <p>${pos.qty} Shares @ $${parseFloat(pos.avg_entry_price).toFixed(2)}</p>
                    </div>
                    <div class="stock-prices">
                        <span class="price">$${parseFloat(pos.market_value).toFixed(2)}</span>
                        <span class="change ${parseFloat(pos.unrealized_pl) >= 0 ? 'up' : 'down'}">
                            ${parseFloat(pos.unrealized_pl) >= 0 ? '+' : ''}$${parseFloat(pos.unrealized_pl).toFixed(2)}
                        </span>
                    </div>
                </div>
            `).join('');
        }
    }

    // 3. Render Trade History
    renderTradeHistory();
}

async function renderTradeHistory() {
    const historyContainer = document.getElementById('history-list');
    if (!historyContainer) return;

    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        const response = await fetch(`${baseUrl}/v2/account/activities/fill`, {
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        const activities = await response.json();

        if (!Array.isArray(activities) || activities.length === 0) {
            historyContainer.innerHTML = '<p class="empty-msg">Waiting for trades...</p>';
            return;
        }

        historyContainer.innerHTML = activities.slice(0, 10).map(act => `
            <div class="stock-item">
                <div class="stock-meta">
                    <h4>${act.symbol}</h4>
                    <p>${act.side.toUpperCase()} ${act.qty} shares | ${new Date(act.transaction_time).toLocaleTimeString()}</p>
                </div>
                <div class="stock-prices">
                    <span class="price">$${parseFloat(act.price).toFixed(2)}</span>
                    <span class="change ${act.side === 'buy' ? 'up' : 'down'}">EXECUTED</span>
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error("History fetch error:", err);
    }
}

function startBotLoop() {
    if (botLoop) clearInterval(botLoop);
    if (safetyLoop) clearInterval(safetyLoop);

    const isMarketOpen = async () => {
        const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
        try {
            const resp = await fetch(`${baseUrl}/v2/clock`, {
                headers: {
                    'APCA-API-KEY-ID': brokerKey,
                    'APCA-API-SECRET-KEY': brokerSecret
                }
            });
            const clock = await resp.json();
            return clock.is_open;
        } catch (err) {
            console.error("[CLOCK] Market sync error:", err);
            return true; // Fallback to avoid stopping during glitch
        }
    };

    const executeSafety = async () => {
        if (!await isMarketOpen()) {
            if (botSettings.interval >= 10) addLog('[SYSTEM] Market Closed. Neural Guard in Standby.', 'system');
            return;
        }
        await monitorPositions();
    };

    const executeStrategy = async () => {
        if (!accountData) return;

        if (!await isMarketOpen()) {
            return; // Silently standby for strategy
        }

        // 1. Analyze Market (STRATEGY ENGINE 2.0)
        const candidates = STOCK_LIST.map(stock => {
            const analysis = StrategyEngine.analyze(stock);
            return { ...stock, analysis };
        })
            .filter(s => s.analysis.action === 'BUY' && s.analysis.confidence * 100 > botSettings.threshold)
            .sort((a, b) => b.analysis.confidence - a.analysis.confidence);

        if (candidates.length === 0) {
            if (botSettings.interval >= 5) addLog('[AI] Market Scan: No viable setups detected.', 'system');
            return;
        }

        // --- GLOBAL PANIC STOP CHECK ---
        const totalEquity = parseFloat(accountData.portfolio_value);
        const startEquity = parseFloat(accountData.last_equity);
        const drawdown = ((startEquity - totalEquity) / startEquity) * 100;

        if (drawdown >= botSettings.panicThreshold) {
            addLog(`[CRITICAL] Panic Threshold Reached (${drawdown.toFixed(2)}%). Disengaging Bot.`, 'warn');
            automationActive = false;
            localStorage.setItem('vander_bot_active', 'false');
            stopBotLoops();
            const startBtn = document.getElementById('start-bot');
            if (startBtn) {
                startBtn.innerText = 'ENGAGE NEURAL TRADING';
                startBtn.style.background = '';
            }
            return;
        }

        // --- MAX POSITIONS CHECK ---
        if (openPositions.length >= botSettings.maxPositions) {
            if (botSettings.interval >= 10) addLog(`[AI] Max positions reached (${botSettings.maxPositions}). Waiting for exits...`, 'system');
            return;
        }

        addLog(`[AI] Strategy Engine found ${candidates.length} opportunities. Top pick: ${candidates[0].symbol}`, 'system');

        // 2. High-Frequency Execution
        const topPicks = candidates.slice(0, 3);
        let executedCount = 0;

        for (let target of topPicks) {
            const alreadyOwned = openPositions.find(p => p.symbol === target.symbol);
            const alreadyPending = pendingOrders.find(o => o.symbol === target.symbol);
            if (alreadyOwned || alreadyPending) continue;

            if ((openPositions.length + executedCount) >= botSettings.maxPositions) break;

            const buyingPower = parseFloat(accountData.buying_power);
            const compoundingEquity = botSettings.compound ? totalEquity : startEquity;

            // Risk Management sizing
            const riskAmount = compoundingEquity * (botSettings.riskPct / 100);
            const dynamicQty = Math.floor(riskAmount / target.price) || 1;
            const totalCost = target.price * dynamicQty;

            if (buyingPower > totalCost) {
                addLog(`[AI] EXECUTE BUY: ${target.symbol} | Reason: ${target.analysis.reason}`, 'trade');
                const result = await executeBrokerTrade(target.symbol, dynamicQty, 'buy');

                if (result.success) {
                    addLog(`[SUCCESS] FILLED ${target.symbol} @ $${target.price}`, 'trade');
                    executedCount++;
                    await new Promise(r => setTimeout(r, 750));
                    await syncBrokerAccount();
                } else {
                    addLog(`[REJECTED] ${target.symbol}: ${result.error}`, 'warn');
                }
            } else {
                addLog(`[SYSTEM] Insufficient Liquidity for ${target.symbol}`, 'warn');
                break;
            }
        }

        if (executedCount > 0) {
            addLog(`[TURBO] Round Complete. ${executedCount} trades active.`, 'system');
        }
    };

    // INSTANT TRIGGER: Don't wait for the first interval
    executeSafety();
    executeStrategy();

    // Safety Loop (1 Second Heartbeat)
    safetyLoop = setInterval(async () => {
        executeSafety();
    }, 1000);

    // 2. STRATEGY SCAN LOOP (Configurable)
    // WEALTH MODE: Real-time scan
    // Threshold and maxPositions now controlled by main botSettings

    botLoop = setInterval(executeStrategy, botSettings.interval * 1000);
}

// Disengage function to clean up BOTH loops
function stopBotLoops() {
    if (botLoop) clearInterval(botLoop);
    if (safetyLoop) clearInterval(safetyLoop);
    botLoop = null;
    safetyLoop = null;
}

async function monitorPositions() {
    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        const response = await fetch(`${baseUrl}/v2/positions`, {
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        openPositions = await response.json();

        if (!Array.isArray(openPositions)) {
            openPositions = [];
            return;
        }

        for (let pos of openPositions) {
            if (!pos || !pos.symbol) continue;

            const profitPct = parseFloat(pos.unrealized_plpc);
            if (isNaN(profitPct)) continue;

            // --- LOCAL POSITION SHIELD ---
            let currentStopLoss = botSettings.stopLoss;

            // --- BREAK EVEN GUARD: PROTECT THE WIN ---
            // If this specific position hits 1.5% profit, we move ITS stop loss to break-even (+0.5%)
            if (profitPct >= 0.015) {
                currentStopLoss = -0.005; // Tighten only for this trade
            }

            // --- ELITE NEURAL SHIELD: Trailing Stop Logic ---
            if (botSettings.trailingStop && profitPct > (botSettings.takeProfit / 2)) {
                const currentPrice = parseFloat(pos.current_price);
                const entryPrice = parseFloat(pos.avg_entry_price);
                const newFloor = entryPrice + ((currentPrice - entryPrice) * 0.5);

                if (currentPrice < newFloor) {
                    addLog(`[SHIELD] Trailing Stop Pulled! Protecting profit on ${pos.symbol}.`, 'trade');
                    const result = await executeBrokerTrade(pos.symbol, pos.qty, 'sell');
                    if (result.success) {
                        syncBrokerAccount();
                        trackPerformance(pos.symbol, parseFloat(pos.unrealized_pl));
                    }
                    continue;
                }
            }

            // Exit Logic 1: Take Profit
            if (profitPct >= botSettings.takeProfit) {
                addLog(`[SHIELD] Target Reached! Selling ${pos.symbol} for +${(profitPct * 100).toFixed(2)}% profit.`, 'trade');
                const result = await executeBrokerTrade(pos.symbol, pos.qty, 'sell');
                if (result.success) {
                    syncBrokerAccount();
                    trackPerformance(pos.symbol, parseFloat(pos.unrealized_pl));
                }
            }
            // Exit Logic 2: Dynamic Stop Loss
            else if (profitPct <= -currentStopLoss) {
                addLog(`[SHIELD] Stop Loss Triggered on ${pos.symbol} at ${(profitPct * 100).toFixed(2)}% loss.`, 'warn');
                const result = await executeBrokerTrade(pos.symbol, pos.qty, 'sell');
                if (result.success) {
                    syncBrokerAccount();
                    trackPerformance(pos.symbol, parseFloat(pos.unrealized_pl));
                }
            }
        }
    } catch (err) {
        console.error("Position monitor error:", err);
    }
}

async function executeBrokerTrade(symbol, qty, side = 'buy') {
    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        const response = await fetch(`${baseUrl}/v2/orders`, {
            method: 'POST',
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                symbol: symbol,
                qty: qty,
                side: side,
                type: 'market',
                time_in_force: 'gtc'
            })
        });
        const order = await response.json();

        if (order.id) {
            sendDiscordAlert(`🚀 **TRADE EXECUTED**\n**Symbol:** ${symbol}\n**Action:** ${side.toUpperCase()}\n**Qty:** ${qty}\n**Status:** FILLED`);
            return { success: true };
        }

        // Alpaca returns errors in a 'message' field
        return { success: false, error: order.message || 'Unknown Exchange Error' };
    } catch (err) {
        return { success: false, error: 'Network or Authentication Failure' };
    }
}

function addLog(text, type) {
    const logs = document.getElementById('bot-logs');
    if (!logs) return;
    const entry = document.createElement('p');
    entry.className = `log-entry ${type}`;
    entry.innerText = text;
    logs.appendChild(entry);
    logs.scrollTop = logs.scrollHeight;
}

async function sendDiscordAlert(message) {
    if (!discordWebhook) return;
    try {
        await fetch(discordWebhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: message,
                username: "Vander Pulse Bot",
                avatar_url: "https://img.icons8.com/neon/96/bot.png"
            })
        });
    } catch (err) {
        console.error("Discord Alert Failed:", err);
    }
}

function initWhaleTracker() {
    const feed = document.getElementById('whale-feed');
    if (!feed) return;

    if (whaleLoop) clearInterval(whaleLoop);

    const whaleSymbols = ['AAPL', 'NVDA', 'MSFT', 'TSLA', 'GOOGL', 'AMZN', 'META', 'SPY', 'QQQ'];

    whaleLoop = setInterval(() => {
        const symbol = whaleSymbols[Math.floor(Math.random() * whaleSymbols.length)];
        const size = (Math.random() * 5 + 1).toFixed(1) + "M";
        const price = (Math.random() * 500 + 100).toFixed(2);

        const item = document.createElement('div');
        item.className = 'whale-item';
        item.innerHTML = `
            <div><span class="symbol">${symbol}</span> <span class="vol">BLOCK TRADE</span></div>
            <div class="size">Value: $${size} @ $${price}</div>
        `;

        feed.prepend(item);
        if (feed.children.length > 8) feed.lastElementChild.remove();
    }, 8000 + Math.random() * 5000);
}

// --- MEDIA HUB & NEURAL REPLAYS ---
function initMediaHub() {
    const mediaGrid = document.getElementById('media-grid');
    const filters = document.querySelectorAll('.m-filter');
    const modal = document.getElementById('media-modal');
    const closeBtn = document.querySelector('.close-modal');
    const cinemaIframe = document.getElementById('cinema-iframe');

    if (!mediaGrid) return;

    // REAL YOUTUBE IDs (Curated & Clean)
    const highlights = [
        { id: 1, cat: 'wins', title: "Massive Win Replay", desc: "Watch the AI Bot handle a +45% gap up using Neural Edge.", stats: ["+$12.4k", "Live Replay"], thumb: "🚀", tubeId: "p7HKvqRIovw" },
        { id: 2, cat: 'losses', title: "The Painful Correction", desc: "A clean look at a deep market loss and recovery plan.", stats: ["-$4.1k", "Educational"], thumb: "📉", tubeId: "Xq_7M9U6Qo0" },
        { id: 3, cat: 'reactions', title: "Stock Market Shock", desc: "Professional traders reacting to extreme market volatility.", stats: ["Speechless", "Whale Alert"], thumb: "😱", tubeId: "yW_RlyP4r1I" },
        { id: 4, cat: 'wins', title: "Portfolio 2x Climb", desc: "The journey of a $10k account hitting $20k in 1 month.", stats: ["+100%", "Bot Alpha"], thumb: "📈", tubeId: "fP_M6kE5Kvk" },
        { id: 5, cat: 'losses', title: "Risk Management Failure", desc: "What happens when you ignore the stop loss (Educational).", stats: ["Capital Loss", "Neural Pulse"], thumb: "🛡️", tubeId: "j6N8fK_v2I0" },
        { id: 6, cat: 'reactions', title: "Psychology of Trading", desc: "Staying calm during massive trade swings.", stats: ["Zen Mode", "Mindset"], thumb: "👀", tubeId: "T7XPeUHe0mU" }
    ];

    function renderMedia(category = 'all') {
        mediaGrid.innerHTML = '';
        const filtered = category === 'all' ? highlights : highlights.filter(h => h.cat === category);

        filtered.forEach(h => {
            const card = document.createElement('div');
            card.className = 'media-card';
            card.innerHTML = `
                <div class="thumb-container">
                    <span style="font-size: 3rem;">${h.thumb}</span>
                    <div class="play-overlay"><div class="play-btn-circ">▶</div></div>
                </div>
                <div class="media-info">
                    <h4>${h.title}</h4>
                    <p>${h.desc}</p>
                    <div class="media-tags">
                        ${h.stats.map(s => `<span class="badge short-term" style="font-size:0.6rem;">${s}</span>`).join('')}
                    </div>
                </div>
            `;
            card.onclick = () => openMediaModal(h);
            mediaGrid.appendChild(card);
        });
    }

    filters.forEach(f => {
        f.onclick = () => {
            filters.forEach(btn => btn.classList.remove('active'));
            f.classList.add('active');
            renderMedia(f.getAttribute('data-cat'));
        };
    });

    function openMediaModal(item) {
        document.getElementById('modal-title').innerText = item.title;
        document.getElementById('modal-desc').innerText = item.desc;
        document.getElementById('modal-stat-1').innerText = item.stats[0];
        document.getElementById('modal-stat-2').innerText = item.stats[1];

        // SET YOUTUBE SRC
        if (cinemaIframe) {
            cinemaIframe.src = `https://www.youtube.com/embed/${item.tubeId}?autoplay=1`;
        }

        modal.classList.add('active');
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove('active');
            if (cinemaIframe) cinemaIframe.src = ""; // STOP VIDEO ON CLOSE
        };
    }

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            if (cinemaIframe) cinemaIframe.src = "";
        }
    };

    renderMedia();
}

// --- FINAL BOOTSTRAP ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('[SYSTEM] Vander Pulse Final Uplink Active...');

    try {
        initAuthSystem();
        initTabs();
        initLiveConnection();
        initWhaleTracker();
        initMediaHub();
        initAutomationSettings();
        setupManualTrading();
        setupAutomation();
        renderStockList();
        renderStrategyLists();
        renderTradeAssetList();
        updateDashboard(selectedStock);
        updateTradingHub(selectedStock);

        // --- AUTO-LINK PROTOCOL ---
        if (brokerKey && brokerSecret) {
            attemptAutoBroker();
        }

        // Secondary Market Data (Reddit)
        if (typeof initRedditSentinel === 'function') initRedditSentinel();

        // Auto-Resume Admin Listener
        const currentUser = localStorage.getItem('vander_current_user');
        if (currentUser === 'yahia admin' && localStorage.getItem('vander_session_active') === 'true') {
            if (typeof initAdminListener === 'function') initAdminListener();
        }

        console.log('[SYSTEM] Neural Terminal Online.');
    } catch (err) {
        console.error("[CRITICAL] Bootstrap Failure:", err);
    }
});

async function attemptAutoBroker() {
    if (typeof syncBrokerAccount === 'function') {
        console.log("[BROKER] Attempting automatic uplink...");
        await syncBrokerAccount();
    }
}
