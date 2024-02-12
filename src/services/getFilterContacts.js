export default function getFilterContacts(filter, contacts) {
  const normalizeFilter = filter.toLowerCase();

  const sortContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return sortContacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizeFilter);
  });
}
