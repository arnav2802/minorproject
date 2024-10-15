import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Arnav' , lastName: 'Sharma' , email: 'sharma.arnav2802@gmail.com'};
  return (
    <section className = "home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={784593.77}
          />
        </header>

      </div>
      <RightSidebar 
      user={loggedIn}
      transaction={[]}
      banks={[{ currentBalance: 784593.77 } , {currentBalance: 957459.77}]}
      />
    </section>
  )
}

export default Home