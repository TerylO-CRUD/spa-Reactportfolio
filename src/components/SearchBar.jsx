export default function SearchBar({ query, onChange }) {
    return (
        <div className="search">
            <input
                type="Search"
                placeholder="Search Projects..."
                aria-label="Search Projects"
                value={query}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}