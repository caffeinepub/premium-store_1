import { Package } from 'lucide-react';

export default function OrderHistory() {
  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2026-02-15',
      total: 698,
      status: 'delivered' as const,
      items: [
        { name: 'Premium Wireless Headphones', quantity: 1, image: '/assets/generated/hero-headphones.dim_2400x1600.png' },
        { name: 'Smart Watch Pro', quantity: 1, image: '/assets/generated/product-smartwatch.dim_2000x2000.png' },
      ],
    },
    {
      id: 'ORD-002',
      date: '2026-02-10',
      total: 249,
      status: 'shipped' as const,
      items: [
        { name: 'True Wireless Earbuds', quantity: 1, image: '/assets/generated/product-earbuds.dim_2000x2000.png' },
      ],
    },
  ];

  const statusColors = {
    processing: 'bg-yellow-100 text-yellow-800',
    shipped: 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800',
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>

      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div key={order.id} className="border border-gray-200 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <div>
                <p className="font-semibold text-gray-900">{order.id}</p>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusColors[order.status]
                  }`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
                <p className="font-bold text-gray-900">${order.total}</p>
              </div>
            </div>

            <div className="space-y-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
