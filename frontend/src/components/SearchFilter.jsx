import React, { useState } from "react";

function SearchFilter() {
    const [filters, setFilters] = useState({
        location: "",
        category: "",
        priceRange: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Filters:", filters);
        // Add your search logic here
    };

    return (
        <div className="card bg-base-100 shadow-xl p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Search Filters</h2>
            <form onSubmit={handleSearch}>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-lg">Location</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter location"
                        required
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-lg">Category</span>
                    </label>
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="">Select category</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="properties">Properties</option>
                        <option value="equipment">Equipment</option>
                    </select>
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-lg">Price Range</span>
                    </label>
                    <input
                        type="text"
                        name="priceRange"
                        value={filters.priceRange}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="e.g., $50-$500"
                    />
                </div>
                <div className="form-control">
                    <button type="submit" className="btn btn-primary w-full">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchFilter;
