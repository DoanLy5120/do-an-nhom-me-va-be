import { Progress, Typography, Space } from "antd"

const { Text } = Typography

/**
 * TopProductsChart.js - Component hiển thị top sản phẩm bán chạy
 *
 * Props:
 * - metric: Metric để đánh giá ('revenue', 'quantity', 'profit')
 * - period: Kỳ thời gian ('current-month', 'last-month', 'quarter')
 *
 * Chức năng:
 * - Hiển thị danh sách top 10 sản phẩm dưới dạng progress bar ngang
 * - Tính toán phần trăm dựa trên sản phẩm có giá trị cao nhất
 * - Format số tiền theo định dạng Việt Nam
 * - Responsive design cho mobile và desktop
 * - Hiển thị thang đo bên dưới biểu đồ (0 - 40k)
 */
const TopProductsChart = ({ metric, period }) => {
  // Dữ liệu mẫu cho top sản phẩm
  const topProductsData = [
    {
      name: "Ail Vàng Sữa Nestlé Vị Vani 100ml",
      revenue: 35000,
      quantity: 10,
      profit: 15000,
    },
    {
      name: "Coca Cola 330ml",
      revenue: 0,
      quantity: 0,
      profit: 0,
    },
    {
      name: "Bánh mì sandwich",
      revenue: 0,
      quantity: 0,
      profit: 0,
    },
    {
      name: "Kẹo dẻo Haribo",
      revenue: 0,
      quantity: 0,
      profit: 0,
    },
    {
      name: "Nước suối Lavie 500ml",
      revenue: 0,
      quantity: 0,
      profit: 0,
    },
  ]

  // Lấy giá trị cao nhất để tính phần trăm
  const maxValue = Math.max(...topProductsData.map((item) => item[metric]))

  // Format số tiền theo định dạng Việt Nam
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN").format(amount)
  }

  // Lấy label cho metric tương ứng
  const getMetricLabel = (item) => {
    switch (metric) {
      case "quantity":
        return `${item.quantity} sản phẩm`
      case "profit":
        return `${formatCurrency(item.profit)}₫`
      default:
        return `${formatCurrency(item.revenue)}₫`
    }
  }

  return (
    <div className="top-products-chart">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {topProductsData.map((product, index) => {
          const value = product[metric]
          const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0

          return (
            <div key={index} className="product-item">
              <div className="product-header">
                <Text className="product-name" ellipsis={{ tooltip: product.name }}>
                  {product.name}
                </Text>
                <Text className="product-value">{getMetricLabel(product)}</Text>
              </div>
              <Progress
                percent={percentage}
                showInfo={false}
                strokeColor="#1890ff"
                trailColor="#f5f5f5"
                strokeWidth={24}
                className="product-progress"
              />
            </div>
          )
        })}
      </Space>

      {/* Thang đo dưới biểu đồ */}
      <div className="chart-scale">
        {Array.from({ length: 11 }, (_, i) => (
          <span key={i} className="scale-item">
            {i === 0 ? "0" : `${i * 4}k`}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TopProductsChart
