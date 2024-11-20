const URL = 'http://localhost:3000/api/v1/establishment';
const ESTABLISHMENT_CODE = 'QCKFEV';

const statusTranslate = {
  'pending_kitchen_confirmation': 'Pendente',
  'in_preparation': 'Em preparo',
  'ready': 'Pronto',
  'canceled': 'cancelado'
};

const formatDate = (dateTime) => {
  const date = dateTime.split('T')[0].split('-');
  return `${date[2]}/${date[1]}/${date[0]}`;
}

const app = Vue.createApp({
  data() {
    return {
      orders: [],
      order: {},
      status: '',
      isDetails: false,
      cancel: false
    }
  },
  async mounted() {
    await this.getOrders()
  },
  methods: {
    async getOrders() {
      try {
        let response = await fetch(
          `${URL}/${ESTABLISHMENT_CODE}/orders?status=${this.status}`
        );
        let data = await response.json();

        this.orders = data.map((order) => ({
          code: order.code,
          status: statusTranslate[order.status],
          customerName: order.customer.name,
          createdAt: formatDate(order.created_at)
        }));
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    },

    async getOrder(code) {
      try {
        let response = await fetch(
          `${URL}/${ESTABLISHMENT_CODE}/orders/${code}`
        );
        let data = await response.json();

        const total = data.order_items
          .reduce((acc, curr) => acc + parseFloat(curr.offer.price), 0);

        this.order = {
          code: data.code,
          status: statusTranslate[data.status],
          customerName: data.customer.name,
          phoneNumber: data.customer.phone_number,
          email: data.customer.email,
          total: total.toFixed(2).replace('.', ','),
          orderItems: data.order_items.map((item) => ({
            note: item.note,
            offerName: item.offer.format.name,
            itemName: item.offer.item.name,
            price: item.offer.price
          }))
        };
      
        this.isDetails = true;
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    },

    async acceptOrder(code) {
      try {
        let response = await fetch(
          `${URL}/${ESTABLISHMENT_CODE}/orders/${code}/in-preparation`, {
          method: 'PUT'
        });
        if (response.ok) {
          window.alert('pedido atualizado com sucesso!');
          this.isDetails = false;      
        }
     
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    },

    async finishOrder(code) {
      try {
        let response = await fetch(
          `${URL}/${ESTABLISHMENT_CODE}/orders/${code}/ready`, {
          method: 'put'
        }
        );
        if (response.ok) {
          window.alert('pedido atualizado com sucesso!');
          this.isDetails = false;
        }

      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    },

    async cancelOrder(code) {
      try {
        const text = document.getElementById('justification').value

        console.log(text)
        let response = await fetch(
          `${URL}/${ESTABLISHMENT_CODE}/orders/${code}/cancel`, {
            method: 'PUT',
            headers: {
             'Content-Type': 'application/json', 
           },
            body: JSON.stringify({
                justification: text
            }),
          }
        );
        if (response.ok) {
          window.alert('pedido cancelado com sucesso!');
          this.cancelOrder = false;
          this.isDetails = false
        }

      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    }
  }
})

app.mount('#app');