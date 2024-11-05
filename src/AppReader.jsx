import users from './local-json/users'
export default function AppReader() {
  return (
    <div className="AppReader">
      {users &&
        users.map(({ name, id }) => (
          <div key={id} className="row">
            <strong>{name}</strong>
          </div>
        ))}
    </div>
  );
}
