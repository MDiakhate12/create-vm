variable "instance_name" {
    type= string
}

provider "google" {
  project = "ept-project-301112"
  region  = "europe-west1"
  zone    = "europe-west1-c"
}

resource "google_compute_instance" "vm_instance" {
  name         = var.instance_name
  machine_type = "f1-micro"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-9"
    }
  }

  network_interface {
    # A default network is created for all GCP projects
    network = "default"
    access_config {
    }
  }
}

output "ip" {
  value = google_compute_instance.vm_instance.network_interface.0.access_config.0.nat_ip
}
