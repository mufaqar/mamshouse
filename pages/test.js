

export default function Cart() {

  return (
    <div className="flex-1 px-4 py-6 mt-20">
      
      <div className="mt-6">
      <div>Total $ </div>
      <a 
        onClick={() => {
          fetch('http://localhost:3000/api/create-checkout-session', {
            method: 'POST',
            body: JSON.stringify({
              cart: 'cart',
            }),
          })
          .then(response => response.json())
          .then(response => {
            console.log(response);
            window.location.href = response.session.url;
          })
        }}
        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium pointer text-white"
      >
        Checkout
      </a>
    </div>
    </div>
  )
}