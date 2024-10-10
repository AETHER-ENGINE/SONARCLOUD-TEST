FROM rust:1.70

WORKDIR /usr/src/mon_app

COPY Cargo.toml Cargo.lock ./

COPY src ./src

RUN cargo build --release

EXPOSE 8080

CMD ["./target/release/mon_app"]