function MainLayout({ children }) {
  return (
    <div>
      <header>
        <h1>IMO Diamond Store BD</h1>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>© IMO Diamond Store BD</p>
      </footer>
    </div>
  );
}

export default MainLayout;
