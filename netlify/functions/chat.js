// NCL Aqua full 2026 itinerary — keyed by YYYY-MM-DD
const AQUA_ITINERARY = {
  '2026-01-01': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-01-02': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-03': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-01-04': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-01-05': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-06': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-01-07': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-01-08': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-01-09': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-10': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-01-11': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-01-12': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-13': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-01-14': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-01-15': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-01-16': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-17': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-01-18': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-01-19': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-20': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-01-21': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-01-22': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-01-23': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-24': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-01-25': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-01-26': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-27': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-01-28': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-01-29': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-01-30': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-01-31': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-02-01': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-02-02': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-02-03': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-02-04': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-02-05': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-02-06': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-02-07': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-02-08': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-02-09': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-02-10': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-02-11': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-02-12': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-02-13': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-02-14': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-02-15': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-02-16': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-02-17': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-02-18': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-02-19': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-02-20': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-02-21': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-02-22': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-02-23': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-02-24': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-02-25': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-02-26': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-02-27': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-02-28': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-03-01': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-03-02': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-03': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-03-04': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-03-05': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-03-06': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-07': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-03-08': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-03-09': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-10': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-03-11': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-03-12': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-03-13': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-14': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-03-15': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-03-16': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-17': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-03-18': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-03-19': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-03-20': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-21': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-03-22': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-03-23': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-24': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-03-25': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-03-26': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-03-27': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-28': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-03-29': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-03-30': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-03-31': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '08:00AM', departure: '05:00PM' },
  '2026-04-01': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '12:00PM', departure: '08:00PM' },
  '2026-04-02': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-04-03': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-04': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-04-05': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-04-06': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-07': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-04-08': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '07:00PM' },
  '2026-04-09': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:00AM', departure: '02:00PM' },
  '2026-04-10': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-11': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-04-12': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '05:30PM' },
  '2026-04-13': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-14': { port: 'Nassau', country: 'Bahamas', arrival: '07:00AM', departure: '06:00PM' },
  '2026-04-15': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '07:00AM', departure: '06:00PM' },
  '2026-04-16': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '12:00PM' },
  '2026-04-17': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-18': { port: 'New York, NY', country: 'U.S.A.', arrival: '02:30PM', departure: '10:00PM' },
  '2026-04-19': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-20': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '01:30PM', departure: '11:59PM' },
  '2026-04-21': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-04-22': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-04-23': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-24': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-25': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-04-26': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-04-27': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-04-28': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-04-29': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-04-30': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-01': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-02': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-05-03': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-04': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-05-05': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-05-06': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-05-07': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-08': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-09': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-05-10': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-11': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-05-12': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-05-13': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-05-14': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-15': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-16': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-05-17': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-18': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-05-19': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-05-20': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-05-21': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-22': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-23': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-05-24': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-25': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-05-26': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-05-27': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-05-28': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-29': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-05-30': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-05-31': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-01': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-06-02': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-06-03': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-06-04': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-05': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-06': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-06-07': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-08': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-06-09': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-06-10': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-06-11': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-12': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-13': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-06-14': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-15': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-06-16': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-06-17': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-06-18': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-19': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-20': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-06-21': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-22': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-06-23': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-06-24': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-06-25': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-26': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-27': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-06-28': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-06-29': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-06-30': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-07-01': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-07-02': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-03': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-07-04': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-05': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-06': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-07-07': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-07-08': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-07-09': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-10': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-11': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-07-12': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-13': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-07-14': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-07-15': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-07-16': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-17': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-18': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-07-19': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-20': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-07-21': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-07-22': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-07-23': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-24': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-25': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-07-26': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-27': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-07-28': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-07-29': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-07-30': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-07-31': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-01': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-08-02': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-03': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-08-04': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-08-05': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-08-06': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-07': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-08': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-08-09': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-10': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-08-11': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-08-12': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-08-13': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-14': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-15': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-08-16': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-17': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-08-18': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-08-19': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-08-20': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-21': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-22': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-08-23': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-24': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-08-25': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '11:59PM' },
  '2026-08-26': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '04:00PM' },
  '2026-08-27': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-28': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-29': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-08-30': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-08-31': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '11:00AM', departure: '11:59PM' },
  '2026-09-01': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-09-02': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-03': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-09-04': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-05': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-09-06': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-09-07': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-08': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-09-09': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-10': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-09-11': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-09-12': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-13': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-09-14': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-15': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-09-16': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-09-17': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-18': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-09-19': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-20': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-09-21': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-09-22': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-23': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-09-24': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-25': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-09-26': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-09-27': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-28': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-09-29': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-09-30': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-10-01': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-10-02': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-03': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-10-04': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-05': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-10-06': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-10-07': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-08': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-10-09': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-10': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '08:00AM', departure: '11:59PM' },
  '2026-10-11': { port: 'Royal Naval Dockyard', country: 'Bermuda', arrival: '12:00AM', departure: '03:00PM' },
  '2026-10-12': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-13': { port: 'New York, NY', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-10-14': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-15': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-16': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-10-17': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '08:00AM', departure: '05:00PM' },
  '2026-10-18': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-10-19': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-20': { port: 'Roatan Island', country: 'Honduras', arrival: '09:00AM', departure: '05:00PM' },
  '2026-10-21': { port: 'Harvest Caye', country: 'Belize', arrival: '07:00AM', departure: '05:00PM' },
  '2026-10-22': { port: 'Costa Maya', country: 'Mexico', arrival: '07:00AM', departure: '05:00PM' },
  '2026-10-23': { port: 'Cozumel', country: 'Mexico', arrival: '07:00AM', departure: '07:00PM' },
  '2026-10-24': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-25': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-10-26': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-10-27': { port: 'Roatan Island', country: 'Honduras', arrival: '09:00AM', departure: '05:00PM' },
  '2026-10-28': { port: 'Harvest Caye', country: 'Belize', arrival: '07:00AM', departure: '05:00PM' },
  '2026-10-29': { port: 'Costa Maya', country: 'Mexico', arrival: '07:00AM', departure: '05:00PM' },
  '2026-10-30': { port: 'Cozumel', country: 'Mexico', arrival: '07:00AM', departure: '07:00PM' },
  '2026-10-31': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-01': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-11-02': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-03': { port: 'Cozumel', country: 'Mexico', arrival: '09:00AM', departure: '05:00PM' },
  '2026-11-04': { port: 'Roatan Island', country: 'Honduras', arrival: '07:00AM', departure: '05:00PM' },
  '2026-11-05': { port: 'Harvest Caye', country: 'Belize', arrival: '07:00AM', departure: '05:00PM' },
  '2026-11-06': { port: 'Costa Maya', country: 'Mexico', arrival: '07:00AM', departure: '07:00PM' },
  '2026-11-07': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-08': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-11-09': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-10': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-11-11': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '06:00PM' },
  '2026-11-12': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:45AM', departure: '02:00PM' },
  '2026-11-13': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-14': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-11-15': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-11-16': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-17': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-11-18': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '06:00PM' },
  '2026-11-19': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:45AM', departure: '02:00PM' },
  '2026-11-20': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-21': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-11-22': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-11-23': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-24': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-11-25': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '06:00PM' },
  '2026-11-26': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:45AM', departure: '02:00PM' },
  '2026-11-27': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-11-28': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-11-29': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-11-30': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-01': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-12-02': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-03': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:45AM', departure: '02:00PM' },
  '2026-12-04': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-05': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-06': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-12-07': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-08': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-12-09': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-10': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:45AM', departure: '02:00PM' },
  '2026-12-11': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-12': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-13': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-12-14': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-15': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-12-16': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-17': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:45AM', departure: '02:00PM' },
  '2026-12-18': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-19': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-20': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-12-21': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-22': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-12-23': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-24': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:45AM', departure: '02:00PM' },
  '2026-12-25': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-26': { port: 'Great Stirrup Cay', country: 'Bahamas', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-27': { port: 'Miami, FL', country: 'U.S.A.', arrival: '07:00AM', departure: '04:00PM' },
  '2026-12-28': { port: 'At Sea', country: 'At sea', arrival: '', departure: '' },
  '2026-12-29': { port: 'Puerto Plata', country: 'Dominican Republic', arrival: '07:00AM', departure: '03:00PM' },
  '2026-12-30': { port: 'St. Thomas', country: 'U.S. Virgin Islands', arrival: '10:00AM', departure: '06:00PM' },
  '2026-12-31': { port: 'Road Town (Tortola)', country: 'British Virgin Islands', arrival: '06:45AM', departure: '02:00PM' }

};

function getItineraryContext() {
  // Use ship's timezone: Eastern Time (Miami-based)
  const now = new Date();
  const options = { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' };
  const parts = new Intl.DateTimeFormat('en-CA', options).format(now); // en-CA gives YYYY-MM-DD
  const todayStr = parts;

  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(tomorrow);

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(yesterday);

  const todayPort     = AQUA_ITINERARY[todayStr];
  const tomorrowPort  = AQUA_ITINERARY[tomorrowStr];
  const yesterdayPort = AQUA_ITINERARY[yesterdayStr];

  let context = `\nNCL AQUA ITINERARY CONTEXT (today is ${todayStr}):\n`;

  if (yesterdayPort) {
    context += `- Yesterday (${yesterdayStr}): ${yesterdayPort.port}${yesterdayPort.country && yesterdayPort.country !== 'At sea' ? ', ' + yesterdayPort.country : ''}`;
    if (yesterdayPort.arrival) context += ` | Arrived: ${yesterdayPort.arrival}`;
    if (yesterdayPort.departure) context += ` | Departed: ${yesterdayPort.departure}`;
    context += '\n';
  }

  if (todayPort) {
    context += `- TODAY (${todayStr}): ${todayPort.port}${todayPort.country && todayPort.country !== 'At sea' ? ', ' + todayPort.country : ''}`;
    if (todayPort.arrival) context += ` | Arrival: ${todayPort.arrival}`;
    if (todayPort.departure) context += ` | Departure: ${todayPort.departure}`;
    context += '\n';
  } else {
    context += `- TODAY (${todayStr}): No itinerary data available\n`;
  }

  if (tomorrowPort) {
    context += `- TOMORROW (${tomorrowStr}): ${tomorrowPort.port}${tomorrowPort.country && tomorrowPort.country !== 'At sea' ? ', ' + tomorrowPort.country : ''}`;
    if (tomorrowPort.arrival) context += ` | Arrival: ${tomorrowPort.arrival}`;
    if (tomorrowPort.departure) context += ` | Departure: ${tomorrowPort.departure}`;
    context += '\n';
  }

  // Add next 7 days for context
  context += '\nUPCOMING PORTS (next 7 days):\n';
  for (let i = 2; i <= 7; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    const dStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
    const entry = AQUA_ITINERARY[dStr];
    if (entry) {
      context += `  ${dStr}: ${entry.port}${entry.country && entry.country !== 'At sea' ? ', ' + entry.country : ''}`;
      if (entry.arrival) context += ` (arrives ${entry.arrival})`;
      if (entry.departure) context += ` (departs ${entry.departure})`;
      context += '\n';
    }
  }

  return context;
}

export default async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  try {
    const body = await request.json();

    // Inject live itinerary context into the system prompt
    const itineraryContext = getItineraryContext();
    if (body.system) {
      body.system = body.system + '\n' + itineraryContext;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
      },
      body: JSON.stringify(body),
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/event-stream',
        'Access-Control-Allow-Origin': '*',
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
};

export const config = { path: '/api/chat' };
